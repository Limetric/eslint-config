'use strict';

const javascriptConfig = require('./javascript.js');

module.exports = {
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'promise',
    'jsdoc'
  ],
  rules: {
    ...javascriptConfig.rules,
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off'
  }
};
