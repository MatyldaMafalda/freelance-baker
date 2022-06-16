import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

module.exports = {
    resolve: {
        // https://dev.to/rubiin/resolving-path-alias-in-nestjs-projects-11o1
        // https://blog.johnnyreilly.com/2018/08/21/typescript-webpack-alias-goodbye-relative-paths
        // https://github.com/dividab/tsconfig-paths-webpack-plugin
        plugins: [new TsconfigPathsPlugin()],
    },
};
