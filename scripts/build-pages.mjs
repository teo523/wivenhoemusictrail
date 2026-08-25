import { cpSync, existsSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

execFileSync(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['next', 'build'], { stdio: 'inherit' });
if (!existsSync('out')) throw new Error('Next.js did not create the out/ directory.');
rmSync('docs', { recursive: true, force: true });
cpSync('out', 'docs', { recursive: true });
console.log('\nStatic site copied to docs/. Commit docs/ and push to main.');
