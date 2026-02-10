module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/favicons");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  return {
    pathPrefix: "/Lucianos/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
  };
};
