module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/_includes/layouts/assets/css": "assets/css"
  });
  eleventyConfig.addPassthroughCopy({
    "src/_includes/layouts/assets/fontawesome": "assets/fontawesome"
  });
  eleventyConfig.addPassthroughCopy({
    "src/_includes/layouts/assets/images": "assets/images"
  });
  eleventyConfig.addPassthroughCopy({
    "src/_includes/layouts/assets/js": "assets/js"
  });
  eleventyConfig.addPassthroughCopy({
    "src/_includes/layouts/assets/plugins": "assets/plugins"
  });
  
  return {
    dir: {
      input: "src"
    }
  };
};