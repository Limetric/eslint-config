'use strict';

const javascriptConfig = require('./javascript.js');

module.exports = {
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'promise',
    'jsdoc'
  ],
  rules: {
    ...javascriptConfig.rules
  }
};
