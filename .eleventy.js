module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("favicon");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats:  ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            include: "includes"
        }
    }
}