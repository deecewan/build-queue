/* eslint-disable @typescript-eslint/no-var-requires */
const { serverless } = require('@probot/serverless-gcf');
const appFn = require('./lib/index.js');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports.probot = serverless(appFn);
