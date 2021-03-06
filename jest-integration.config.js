const jestConfig = require('./jest.config')
jestConfig.testMatch = ['<rootDir>/tests/integration/**/*.integration.ts']
module.exports = jestConfig
