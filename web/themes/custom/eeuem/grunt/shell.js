'use strict';
module.exports = {
  options: {
    stdout: true,
    stderr: true
  },
  cr: {
    command: '../../../../vendor/bin/drush cr'
  },
  caniuse: {
    command: 'npm update caniuse-db'
  }
};
