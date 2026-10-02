const { execSync } = require('child_process');

console.log('🚀 Building static assets...');
execSync('node build-static.js', { stdio: 'inherit' });

console.log('🚀 Deploying to gh-pages branch...');
execSync('git checkout --orphan gh-pages-temp', { stdio: 'inherit' });
execSync('git reset', { stdio: 'inherit' });
execSync('git --work-tree dist add --all', { stdio: 'inherit' });
execSync('git --work-tree dist commit -m "Deploy static site to GitHub Pages"', { stdio: 'inherit' });
execSync('git push origin gh-pages-temp:gh-pages --force', { stdio: 'inherit' });
execSync('git checkout -f main', { stdio: 'inherit' });
execSync('git branch -D gh-pages-temp', { stdio: 'inherit' });

console.log('✅ Successfully deployed to gh-pages branch!');
