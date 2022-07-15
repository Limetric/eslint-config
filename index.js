'use strict';

module.exports = {
  extends: [
    'eslint:all',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended'
  ],
  plugins: [
    'promise',
    'jsdoc'
  ],
  rules: {
    'array-element-newline': ['error', 'consistent'],
    indent: ['error', 2],
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
