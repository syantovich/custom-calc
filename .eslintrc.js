module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
