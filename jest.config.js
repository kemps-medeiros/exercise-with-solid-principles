module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['**/*.spec.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };