'use strict';

module.exports = {
  extends: [
    'eslint:all',
    'plugin:jsdoc/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/all'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'promise',
    'jsdoc'
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'capitalized-comments': 'off',
    complexity: 'off',
    'default-param-last': 'off',
    'function-call-argument-newline': ['error', 'consistent'],
    'id-length': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
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
    'multiline-comment-style': ['error', 'bare-block'],
    'multiline-ternary': 'off',
    'newline-per-chained-call': 'off',
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
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
    'prefer-named-capture-group': 'off',
    'quote-props': ['error', 'as-needed'],
    'require-atomic-updates': 'off'
  }
};
