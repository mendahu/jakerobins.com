const config = {
  plugins: [
    require("autoprefixer"),
    require("postcss-import-ext-glob"),
    require("postcss-import"),

    require("tailwindcss/nesting"),

    require("tailwindcss"),
  ],
};

module.exports = config;
