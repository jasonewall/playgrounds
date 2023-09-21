import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    moduleDirectories: [
        'node_modules',
        '<rootDir>',
    ],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    testMatch: [
        "<rootDir>/tests/**/*.test.[jt]s?(x)",
    ],
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
};

export default config;
