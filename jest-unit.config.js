const jestConfig = require('./jest.config')
jestConfig.testMatch = ['<rootDir>/tests/unit/**/*.unit.ts']
module.exports = jestConfig
