const path = require("path");

const blogTailwindConfig = path.join(__dirname, "tailwind.blog.config.ts");

function sourcePath(ctx) {
  if (typeof ctx.file === "string") {
    return ctx.file;
  }

  if (ctx.file && ctx.file.dirname) {
    return path.join(ctx.file.dirname, ctx.file.basename || "");
  }

  return ctx.from || (ctx.options && ctx.options.from) || "";
}

function isPortfolioCss(filePath) {
  return filePath.replace(/\\/g, "/").includes("/src/portfolio/");
}

const sharedPlugins = [
  require("autoprefixer"),
  require("postcss-import-ext-glob"),
  require("postcss-import"),
  require("tailwindcss/nesting"),
];

module.exports = (ctx) => {
  const plugins = [...sharedPlugins];

  if (!isPortfolioCss(sourcePath(ctx))) {
    plugins.push(require("tailwindcss")(blogTailwindConfig));
  }

  return { plugins };
};
