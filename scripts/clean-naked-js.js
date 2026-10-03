const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../scraped/pages/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Find the section end of roadmap and clean out the naked duplicate JS block
const target = `      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          drawThreads();
        }, 80);
      });

    })();
  </script>
</section>

      function openModal(stepNum) {`;

const fixed = `      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          drawThreads();
        }, 60);
      });

    })();
  </script>
</section>`;

// Replace from `function openModal(stepNum)` until the second `</section>`
const duplicateBlockRegex = /<\/section>\s*function openModal\(stepNum\)[\s\S]*?<\/script>\s*<\/section>/;
if (duplicateBlockRegex.test(html)) {
  html = html.replace(duplicateBlockRegex, '</section>');
  console.log('Successfully stripped duplicate naked JS block!');
  fs.writeFileSync(indexPath, html, 'utf8');
} else {
  console.log('Regex did not match directly, trying string split');
  const parts = html.split('function openModal(stepNum) {');
  // If there are multiple occurrences
  if (parts.length > 2) {
    // The second occurrence is inside the naked block
    const endPart = parts[2].split('</section>');
    endPart.shift(); // remove everything up to the duplicate </section>
    html = parts[0] + 'function openModal(stepNum) {' + parts[1] + '</section>' + endPart.join('</section>');
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Successfully cleaned via split!');
  }
}
