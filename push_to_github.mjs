import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';

const dir = 'C:\\Slock\\PAPER_272';
const token = process.argv[2];

if (!token) {
  console.log('\n======================================================');
  console.log('GitHub Push — SlockAhuja/AI_Based_resource_management');
  console.log('======================================================');
  console.log('Usage:');
  console.log('  node push_to_github.mjs <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>');
  console.log('\nTo generate a token:');
  console.log('  1. Go to https://github.com/settings/tokens?type=beta (or classic tokens)');
  console.log('  2. Click "Generate new token" with "repo" scope');
  console.log('  3. Run: node push_to_github.mjs <token>');
  console.log('======================================================\n');
  process.exit(0);
}

async function push() {
  const remoteUrl = 'https://github.com/SlockAhuja/AI_Based_resource_management.git';
  console.log(`Pushing to ${remoteUrl}...`);

  await git.setConfig({
    fs,
    dir,
    path: 'remote.origin.url',
    value: remoteUrl,
  });

  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true,
    onAuth: () => ({ username: token, password: '' }),
  });

  console.log('Successfully pushed repository to GitHub!', pushResult);
}

push().catch(err => {
  console.error('Error during push:', err.message);
});
