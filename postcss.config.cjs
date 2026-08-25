const path = require("path");

const blogTailwindConfig = path.join(__dirname, "tailwind.blog.config.ts");

const config = {
  plugins: [
    require("autoprefixer"),
    require("postcss-import-ext-glob"),
    require("postcss-import"),

    require("tailwindcss/nesting"),

    // Pin the blog config by path. Vite/postcss-import does not honor @config
    // in this pipeline; a later portfolio CSS file can switch this to a
    // file-aware lookup without a default tailwind.config.ts.
    require("tailwindcss")(blogTailwindConfig),
  ],
};

module.exports = config;
