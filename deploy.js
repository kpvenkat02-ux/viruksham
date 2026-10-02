const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Building static assets with relative paths...');
execSync('node build-static.js', { stdio: 'inherit' });

console.log('🚀 Deploying dist folder to gh-pages branch...');
const distDir = path.join(__dirname, 'dist');

// Remove any existing .git inside dist to start fresh
const distGit = path.join(distDir, '.git');
if (fs.existsSync(distGit)) {
  fs.rmSync(distGit, { recursive: true, force: true });
}

// Initialize a clean git repository inside dist/
execSync('git init', { cwd: distDir, stdio: 'ignore' });
execSync('git config user.name "kpvenkat02-ux"', { cwd: distDir, stdio: 'ignore' });
execSync('git config user.email "kpvenkat02@gmail.com"', { cwd: distDir, stdio: 'ignore' });
execSync('git add -A', { cwd: distDir, stdio: 'ignore' });
execSync('git commit -m "Deploy static site to GitHub Pages with relative paths"', { cwd: distDir, stdio: 'ignore' });

// Get remote origin URL from root repo
const originUrl = execSync('git config --get remote.origin.url').toString().trim();
execSync(`git push "${originUrl}" HEAD:gh-pages --force`, { cwd: distDir, stdio: 'inherit' });

console.log('✅ Successfully deployed to gh-pages branch!');
