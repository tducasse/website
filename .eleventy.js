const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPlugin(pluginSEO, require("./_data/seo.json"));
};
