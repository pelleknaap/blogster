// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Pelle v/d Knaap";
export const SITE_DESCRIPTION =
  "Blog posts about web development, animations, CSS, programming in general, and other things I find interesting.";
export const TWITTER_HANDLE = "@pelleknaap";
export const MY_NAME = "Pelle van der Knaap";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
