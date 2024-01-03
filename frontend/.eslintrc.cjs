module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'prettier', '@tanstack/query'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-children-prop': 0,
    'no-case-declarations': 'warn',
    'import/prefer-default-export': 'warn',
    '@tanstack/query/exhaustive-deps': 0,
    'import/no-cycle': 0,
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": ['./vite.config.ts', '**/*.test.tsx', '**/*.test.ts'],
        "packageDir": "./"
      }
    ]
  },
};
