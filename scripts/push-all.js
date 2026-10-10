const { execSync } = require('child_process');

console.log('=== PUSHING OPERATION1 ===');
try {
  execSync('git add -A', { cwd: 'C:/Users/ADMIN/Documents/operation1', stdio: 'inherit' });
  try {
    execSync('git commit -m "feat: update home latest videos and prerendered build"', { cwd: 'C:/Users/ADMIN/Documents/operation1', stdio: 'inherit' });
  } catch (err) {
    console.log('Nothing to commit or already committed.');
  }
  execSync('git push origin feature/youtube-auto-videos', { cwd: 'C:/Users/ADMIN/Documents/operation1', stdio: 'inherit' });
  console.log('✅ Operation1 pushed successfully!');
} catch (e) {
  console.error('❌ Error pushing operation1:', e.message);
}

console.log('\n=== CHECKING & PUSHING CLONE (VIRUKSHAM) ===');
try {
  execSync('node build-static.js', { cwd: 'C:/Users/ADMIN/Documents/clone', stdio: 'inherit' });
  execSync('git add -A', { cwd: 'C:/Users/ADMIN/Documents/clone', stdio: 'inherit' });
  try {
    execSync('git commit -m "build: rebuild static distribution with updated navigation and image feeds"', { cwd: 'C:/Users/ADMIN/Documents/clone', stdio: 'inherit' });
  } catch (err) {
    console.log('Clone clean, nothing new to commit.');
  }
  execSync('git push origin main', { cwd: 'C:/Users/ADMIN/Documents/clone', stdio: 'inherit' });
  execSync('node deploy.js', { cwd: 'C:/Users/ADMIN/Documents/clone', stdio: 'inherit' });
  console.log('✅ Clone main & gh-pages branches pushed successfully!');
} catch (e) {
  console.error('❌ Error in clone deploy:', e.message);
}
