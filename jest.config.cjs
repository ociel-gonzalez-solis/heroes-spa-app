module.exports = {
  // TODO: jsdom
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    "^animate.css$": "<rootDir>/mocks/animate.css.js",
  },
  transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
};
