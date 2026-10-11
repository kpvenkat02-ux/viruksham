const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const tokenPath = path.join(__dirname, '..', '.token.local');
const token = fs.existsSync(tokenPath) ? fs.readFileSync(tokenPath, 'utf8').trim() : process.env.VERCEL_TOKEN;

console.log('1. Building static distribution...');
execSync('node build-static.js', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });

console.log('\n2. Committing and pushing to GitHub...');
try {
  execSync('git add scraped/ public/ scripts/ .gitignore', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
  execSync('git commit -m "update: change timing to 5:00 PM, update contact page and media dynamic articles"', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
} catch (e) {
  console.log('Commit note:', e.message);
}

execSync('git push origin main', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
execSync('node deploy.js', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });

if (token) {
  console.log('\n3. Building with Vercel...');
  execSync('npx -y vercel build --prod --token ' + token, { cwd: path.join(__dirname, '..'), stdio: 'inherit' });

  console.log('\n4. Deploying prebuilt to Vercel Production...');
  const deployOut = execSync('npx -y vercel deploy --prebuilt --prod --token ' + token, { cwd: path.join(__dirname, '..') }).toString();
  console.log('DEPLOY SUCCESS:\n', deployOut);
} else {
  console.log('No token found in .token.local or VERCEL_TOKEN');
}
