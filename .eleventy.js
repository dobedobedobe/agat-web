const htmlmin = require("html-minifier");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
// const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  /**
   * Upgrade helper
   * Uncomment if you need help upgrading to new major version.
   */
  //eleventyConfig.addPlugin(UpgradeHelper);

  /**
   * Files to copy
   * https://www.11ty.dev/docs/copy/
   */
  // eleventyConfig.addPlugin(faviconsPlugin, {
  //   outputDir: "./_site",
  // });
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./src/drag.js": "./js_lp/drag.js", //this is the JS file for the salad interactive
  });
  /**
   * HTML Minifier for production builds
   */
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV == "production" &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      data: "../_data",
    },
  };
};
