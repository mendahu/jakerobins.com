import { useStoryblokApi } from "@storyblok/astro";
import type { PostStoryblok } from "../../../component-types-sb";
import type { ISbStoriesParams } from "storyblok-js-client";

/** Cap parallel Storyblok CDN calls during `astro build` so Coolify is not flooded. */
const MAX_CONCURRENT = 2;
/** Small gap between starting requests — keeps the build slower but steadier. */
const REQUEST_GAP_MS = 150;

let active = 0;
const waitQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  return new Promise((resolve) => {
    const tryAcquire = () => {
      if (active < MAX_CONCURRENT) {
        active += 1;
        resolve();
        return;
      }
      waitQueue.push(tryAcquire);
    };
    tryAcquire();
  });
}

function releaseSlot() {
  active -= 1;
  const next = waitQueue.shift();
  if (next) next();
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Storyblok CDN GET with a process-wide concurrency limit.
 * Use this instead of `useStoryblokApi().get` in build-time paths.
 */
export async function storyblokGet(
  path: string,
  params?: ISbStoriesParams,
): Promise<any> {
  const storyblokApi = useStoryblokApi();
  await acquireSlot();
  try {
    await delay(REQUEST_GAP_MS);
    return await storyblokApi.get(path, params);
  } finally {
    releaseSlot();
  }
}

/**
 * Fetches all blog posts from Storyblok CMS with automatic pagination handling.
 *
 * Pages are fetched sequentially; each page request goes through the throttle
 * so this stays polite when called alongside other build-time fetches.
 */
export async function fetchAllPosts(options: Partial<ISbStoriesParams> = {}) {
  const allStories: PostStoryblok[] = [];

  let page = 1;
  let hasMorePages = true;

  while (hasMorePages) {
    const result = await storyblokGet("cdn/stories/", {
      content_type: "post",
      version: import.meta.env.DEV ? "draft" : "published",
      page,
      ...options,
    });

    const data = result.data;
    allStories.push(...data.stories);

    const totalPosts = result.total;
    const postsSoFar = allStories.length;

    hasMorePages = postsSoFar < totalPosts;
    page++;
  }

  return allStories;
}
