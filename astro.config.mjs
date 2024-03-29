import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import { siteConfig } from "./src/config/config";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        post: "storyblok/Post",
        blockquote: "storyblok/Blockquote",
        blogimage: "storyblok/BlogImage",
      },
      apiOptions: {
        region: "us",
      },
    }),
  ],
  redirects: {
    "/": "/blog",
  },
  prefetch: true,
  site: siteConfig.host,
});
