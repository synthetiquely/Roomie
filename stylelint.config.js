module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-a11y/recommended"],
  plugins: [
    "stylelint-color-format",
    "stylelint-group-selectors",
    "stylelint-declaration-use-variable",
    "stylelint-high-performance-animation",
    "stylelint-z-index-value-constraint",
  ],
  rules: {
    "color-format/format": {
      format: "hsl",
    },
    "plugin/stylelint-group-selectors": true,
    "sh-waqar/declaration-use-variable": [["/color/", "z-index", "font-size"]],
    "plugin/no-low-performance-animation-properties": true,
    "plugin/z-index-value-constraint": {
      min: 1,
      max: 5,
    },
  },
};
