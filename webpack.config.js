const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "**/*.!(js)",
                    filter: async (resourcePath) => {
                        // const data = await fs.promises.readFile(resourcePath);
                        // const content = data.toString();
                        // console.log(resourcePath);
                        // if (content === "my-custom-content") {
                        //     return false;
                        // }
                        if (resourcePath.match(/.*\.js/)) return false;
                        return true;
                    },
                    context: path.resolve(__dirname, "src"),
                },
                {
                    from: "*.json",
                    context: path.resolve(__dirname, "src"),
                }
            ],
        }),
    ],
    entry: {
        "service-worker": "./src/service-worker.js",
        "popup/index": "./src/popup/index.js",
        "content_scripts/content_script": "./src/content_scripts/content_script.js",
    },
    output: {
        path: path.resolve(__dirname, "build"),
    },
    optimization: {
        minimize: true,
    }
};