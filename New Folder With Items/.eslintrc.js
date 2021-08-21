module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    indent: ["error", 2, { ignoredNodes: ["TemplateLiteral"] }],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    quotes: ["warn", "single"],
    semi: ["warn", "never"],
  },
};
