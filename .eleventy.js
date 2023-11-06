module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addShortcode("year", function () {
    const d = new Date();
    return d.getFullYear();
  });

  eleventyConfig.addLiquidFilter("classes", function (slug, type) {
    if (type === "books") {
      return slug === "books" ? "active" : "";
    } else {
      return slug === "games" ? "active" : "";
    }
  });

  eleventyConfig.addLiquidFilter("hrefs", function (slug, type) {
    if (type === "books") {
      return slug === "books" ? "/" : "/bouquins";
    } else {
      return slug === "games" ? "/" : "/jeux";
    }
  });

  return {
    passthroughFileCopy: true,
  };
};
