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
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'capitalized-comments': 'off',
    complexity: 'off',
    'default-param-last': 'off',
    'function-call-argument-newline': ['error', 'consistent'],
    'id-length': 'off',
    indent: ['error', 2],
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'max-classes-per-file': 'warn',
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'newline-per-chained-call': 'off',
    'multiline-ternary': 'off',
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'no-continue': 'off',
    'no-extra-parens': ['error', 'functions'],
    'no-inline-comments': 'off',
    'no-magic-numbers': 'off',
    'no-plusplus': 'off',
    'no-ternary': 'off',
    'no-undefined': 'off',
    'no-warning-comments': 'warn',
    'one-var': 'off',
    'padded-blocks': ['error', 'never'],
    'prefer-destructuring': ['error', {
      array: false,
      object: true
    }],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'require-atomic-updates': 'off',
    semi: ['error', 'always']
  }
};
