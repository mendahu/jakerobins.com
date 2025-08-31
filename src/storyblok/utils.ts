import { useStoryblokApi } from "@storyblok/astro";
import type { PostStoryblok } from "../../component-types-sb";
import type { ISbStoriesParams } from "storyblok-js-client";

/**
 * Fetches all blog posts from Storyblok CMS with automatic pagination handling.
 *
 * This function recursively fetches all available blog posts by making multiple API calls
 * until all posts have been retrieved. It handles pagination automatically and returns
 * a complete array of all posts.
 *
 * @param options - Configuration options for the fetch operation, using Storyblok's native API parameters

 *
 * @returns Promise<PostStoryblok[]> - Array of all blog posts
 *
 * @example
 * ```typescript
 * // Fetch all posts with default settings
 * const allPosts = await fetchAllPosts();
 *
 * // Fetch all posts with custom relations and sorting
 * const posts = await fetchAllPosts({
 *   resolve_relations: ["post.category", "post.series"],
 *   sort_by: "published_at:desc",
 * });
 * ```
 *
 * @throws {Error} If the Storyblok API request fails
 */
export async function fetchAllPosts(options: Partial<ISbStoriesParams> = {}) {
  const storyblokApi = useStoryblokApi();
  const allStories: PostStoryblok[] = [];

  let page = 1;
  let hasMorePages = true;

  while (hasMorePages) {
    const result = await storyblokApi.get("cdn/stories/", {
      content_type: "post",
      version: import.meta.env.DEV ? "draft" : "published",
      page,
      ...options,
    });

    const data = result.data;
    allStories.push(...data.stories);

    // Check if there are more pages
    const totalPosts = result.total;
    const postsSoFar = allStories.length;

    hasMorePages = postsSoFar < totalPosts;
    page++;
  }

  return allStories;
}
