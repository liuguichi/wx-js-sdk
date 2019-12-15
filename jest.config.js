module.exports = {
    "roots": [
      "<rootDir>/tests"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "setupFilesAfterEnv": ["jest-extended", './jest.setup.js'],
    "verbose": true
  }
