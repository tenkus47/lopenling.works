const path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var postcssImport = require("postcss-import");
var postcssCssnext = require("postcss-cssnext");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";
  return {
    context: __dirname,
    mode: devMode ? "development" : "production",

    entry: {
      parkhang: ["./app/index", "./website/index"],
    },
    output: {
      path: path.resolve(__dirname, "docs/bundles"),
      filename: "[name].bundle.js",
    },
    optimization: {
      splitChunks: {
        chunks: "async",
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new BundleTracker({ filename: "./webpack-stats-dev.json" }),
      new MiniCssExtractPlugin({
        filename: "styles-dev.css",
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development"),
        },
      }),
      new LodashModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: "Your amazing app!",
        inject: "body",
        scriptLoading: "defer",
        template: "./app/index.html",
      }),
    ],
    target: "web",
    devServer: {
      port: "1200",
      static: ["./docs/bundles"],
      open: true,
      hot: true,
      liveReload: true,
    },
    devtool: devMode ? "eval-source-map" : false,
    resolve: {
      extensions: [".js", ".jsx", ".json", ".tsx", ".ts"],
      modules: [path.resolve("./node_modules"), path.resolve("./app")],
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-react",
                  "@babel/preset-env",
                  "@babel/preset-flow",
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /accounts\.css/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]---[local]",
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                plugins: () => [
                  postcssImport({
                    addDependencyTo: webpack,
                    path: path.resolve("./app"),
                  }),
                  postcssCssnext({
                    compress: true,
                  }),
                ],
              },
            },
          ],
        },
        {
          test: /accounts\.css/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: false,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                plugins: () => [
                  postcssImport({
                    addDependencyTo: webpack,
                    path: path.resolve("./app"),
                  }),
                  postcssCssnext({
                    compress: true,
                  }),
                ],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      inlineStyles: {
                        onlyMatchedOnce: false,
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          loader: "file-loader",
          include: [/fonts/],

          options: {
            name: "[hash].[ext]",
            outputPath: "css/",
            publicPath: (url) => "../css/" + url,
          },
        },
        { test: /.html$/, loader: "html-loader" },
      ],
    },
  };
};
