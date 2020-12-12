module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "_includes/layouts/assets/css": "assets/css"
  });
  eleventyConfig.addPassthroughCopy({
    "_includes/layouts/assets/fontawesome": "assets/fontawesome"
  });
  eleventyConfig.addPassthroughCopy({
    "_includes/layouts/assets/images": "assets/images"
  });
  eleventyConfig.addPassthroughCopy({
    "_includes/layouts/assets/js": "assets/js"
  });
  eleventyConfig.addPassthroughCopy({
    "_includes/layouts/assets/plugins": "assets/plugins"
  });
  
  return {
    dir: {
      output: "docs"
    }
  };
};