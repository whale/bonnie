module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Load site.yml as global data accessible via {{ site.* }}
  eleventyConfig.addGlobalData("site", () => {
    const yaml = require("js-yaml");
    const fs = require("fs");
    return yaml.load(fs.readFileSync("content/site.yml", "utf8"));
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
