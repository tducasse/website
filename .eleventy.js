const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPlugin(pluginSEO, {
    title: "tducasse.com",
    description: "Ramblings and stuff",
    url: "https://tducasse.com",
    author: "Thibaud Ducasse",
    twitter: "tducasse",
    image: "/public/android-chrome-192x192.png",
    options: {
      titleStyle: "minimalistic",
      imageWithBaseUrl: true,
    },
  });
};
