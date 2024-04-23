# jakerobins.com

This is my blog, feel free to look around if you're interested in how I put it together.

## Local Run

Running this site locally will be problematic for you unless you have a [Storyblok](https://www.storyblok.com) account, which is my CMS provider. You'd also need some kind of schema setup to match this one's if you want to see blog posts live. I presume you don't want to do that, and so here we are. Maybe one day I'll create some mock data to fallback to, but that's a pretty low value add. That being said, if you did all that, the app setup is quite straightforward:

1. Clone to your machine
2. Create `.env` file with `STORYBLOK_TOKEN` var matching your Storyblok stoken.
3. `npm install`
4. `npm start`

## Design Principles

This site is built using [Astro](https://astro.build). My goal was to produce the most basic and simple content site with very few bells and whistles. The design is meant to be elegant, straightward, performant, accessible, and leveraging web standards.

The built site is generally just HTML and CSS. Astro adds some JavaScript for some pre-fetching functionality for better internal link performance. Google Analytics is also running so I can see if anyone actually reads this (they do, so far).

## Styles

This site is a big experiment for me to try to become better at CSS. It is built using the [CUBE CSS Methodology](https://cube.fyi), a lovely methodology developed by Andy Bell that is "orientated towards simplicity, pragmatism and consistency." It uses PostCSS and Tailwind's build tools to produce some base utility classes from a design token JSON file, but otherwise leans into the cascade and uses vanilla CSS. I'm new to the methodology but hope to be able to master it and use this for other projects, too.

## Content

I've trying [Storyblok](https://www.storyblok.com) CMS for this. It's a pretty full-featured CMS that has worked out pretty well so far for me.

## Hosting

This site is hosted on GitHub Pages. One day I want to try spinning up my own VPS and setting up a GitHub connected deployment pipeline. Today is not that day.
