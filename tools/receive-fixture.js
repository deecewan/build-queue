/* eslint-disable @typescript-eslint/no-var-requires */
const { statSync } = require('fs');
const { execSync } = require('child_process');
const { resolve, join } = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

const item = process.argv.pop();

const file = resolve(__dirname, join('..', 'test', 'fixtures', `${item}.json`));

try {
  statSync(file);
} catch (e) {
  console.log(
    `There is no fixture for \`${item}\`.
Check the event name is correct, or add the payload to \`test/fixtures/${item}.json\``,
  );
  process.exit(1);
}

const res = execSync(
  `yarn probot receive -e ${item} -p test/fixtures/${item}.json ./lib/index.js`,
);

console.log(res.toString());
