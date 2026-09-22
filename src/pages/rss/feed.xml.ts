import rss from "@astrojs/rss";
import { siteConfig } from "../../blog/config/config";
import type { PostStoryblok } from "../../../component-types-sb";
import { storyblokGet } from "../../blog/storyblok/utils";

export async function GET(context: any) {
  const { data } = await storyblokGet("cdn/stories/", {
    content_type: "post",
    version: import.meta.env.DEV ? "draft" : "published",
  });

  const stories = Object.values(data.stories) as PostStoryblok[];

  const items = stories.map((story) => {
    return {
      title: story.name,
      pubDate: story.published_at,
      description: story.content?.description,
      link: `/blog/${story.slug}/`,
    };
  });

  return rss({
    // `<title>` field in output xml
    title: siteConfig.title,
    // `<description>` field in output xml
    description: siteConfig.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items,
    // (optional) inject custom xml
    customData: `<language>en-ca</language>`,
  });
}
