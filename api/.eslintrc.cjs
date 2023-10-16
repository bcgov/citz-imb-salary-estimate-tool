module.exports = {
  globals: {
    module: 'readonly',
  },
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'eslint-config-prettier',
  ],
  plugins: ['prettier'],
  settings: {
    // Tells eslint how to resolve imports.
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
  ignorePatterns: ['node_modules/', 'package-lock.json', 'dist/', 'tests/'],
};
