module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential", 
    "eslint:recommended"
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'eslint:recommended'
  ],
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
