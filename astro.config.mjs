import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import { siteConfig } from "./src/blog/config/config";
import sitemap from "@astrojs/sitemap";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        post: "blog/storyblok/Post",
        blockquote: "blog/storyblok/Blockquote",
        blogimage: "blog/storyblok/BlogImage",
      },
      apiOptions: {
        region: "us",
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-CA",
        },
      },
    }),
  ],
  prefetch: true,
  site: siteConfig.host,
  vite: {
    optimizeDeps: {
      include: ["astro/toolbar"],
      exclude: ["@storyblok/astro/toolbarApp.ts"],
    },
  },
});
