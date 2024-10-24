module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "@vue/standard",
    "prettier",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    curly: "off",
    indent: 0,
    "template-curly-spacing": 0,
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 3,
        },
      },
    ],
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  globals: {
    describe: false,
    expect: false,
    it: false,
  },
  overrides: [],
};
