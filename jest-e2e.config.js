const jestConfig = require('./jest.config')
jestConfig.testMatch = ['<rootDir>/tests/e2e/**/*.e2e.ts']
module.exports = jestConfig
