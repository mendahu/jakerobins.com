import rss from "@astrojs/rss";
import { siteConfig } from "../../config/config";
import { useStoryblokApi } from "@storyblok/astro";
import type {
  CategoryStoryblok,
  PostStoryblok,
} from "../../../component-types-sb";

export async function getStaticPaths() {
  const sbApi = useStoryblokApi();

  const { data } = await sbApi.get("cdn/stories/", {
    content_type: "category",
    version: import.meta.env.DEV ? "draft" : "published",
  });

  const stories = Object.values(data.stories) as CategoryStoryblok[];

  return stories.map((story) => {
    return {
      params: { slug: story.slug },
      props: { uuid: story.uuid },
    };
  });
}

export async function GET(context: any) {
  const sbApi = useStoryblokApi();

  const { data } = await sbApi.get("cdn/stories/", {
    content_type: "post",
    filter_query: {
      category: {
        in: context.props.uuid,
      },
    },
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
