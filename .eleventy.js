const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/code-preview');

    

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

      // Define a collection for posts
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByTag("posts");
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
