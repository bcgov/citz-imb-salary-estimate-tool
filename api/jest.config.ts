/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)"
  ],
  verbose: true,
  collectCoverage: false,
  coverageDirectory: './tests/coverage',
  testTimeout: 10000,
  setupFiles: ['dotenv/config'],
  roots: ['.'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

export default jestConfig;
