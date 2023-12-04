module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './frontend/tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', '@tanstack/query'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-children-prop': 0,
    'no-case-declarations': 'warn',
    'import/prefer-default-export': 'warn',
    '@tanstack/query/exhaustive-deps': 0,
  },
};
