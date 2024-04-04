const sliceFilter = (array, num) => {
  return array.slice(0, num);
};

const sortByOrder = (array) => {
  return array.sort((a, b) => a.data.nav.order - b.data.nav.order);
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "input/assets/styles/": "styles/",
    "./input/assets/images": "img/",
    "./input/_data": "data/",
    "./input/assets/fonts": "fonts/",
  });

  eleventyConfig.addFilter("sorting", sortByOrder);
  eleventyConfig.addFilter("sliceFilter", sliceFilter);

  return {
    dir: {
      input: "./input/pages/",
      output: "output",
      includes: "../_partials",
      layouts: "../_layouts",
      data: "../_data",
    },
  };
};
