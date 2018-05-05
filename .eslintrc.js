const fs = require('fs');
const CACHE = './.eslintrc.cache.json';

let opt;

try {
  opt = require(CACHE);
} catch (err) {
  const { Neutrino } = require('neutrino');
  opt = Neutrino()
    .use('.neutrinorc.js')
    .call('eslintrc');
} finally {
  fs.writeFileSync(CACHE, JSON.stringify(opt));
}

module.exports = opt;
