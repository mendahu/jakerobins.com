import {StoryblokStory} from 'storyblok-generate-ts'

export interface CategoryStoryblok {
  name?: string;
  hue: string;
  _uid: string;
  component: "category";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface PostStoryblok {
  title?: string;
  category: StoryblokStory<CategoryStoryblok> | string;
  description?: string;
  cover?: AssetStoryblok;
  content?: RichtextStoryblok;
  _uid: string;
  component: "post";
  [k: string]: any;
}
