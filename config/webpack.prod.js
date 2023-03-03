const { resolve } = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "production",
  output: {
    filename: "static/js/[name].[contenthash].js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // { from: resolve(__dirname, "../public"), to: "[path][name][ext]" },
        {
          from: resolve(__dirname, "../public"),
          to: resolve(__dirname, "../dist"),
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: "advanced",
        },
      }),
    ],
    splitChunks: {
      minSize: 10000,
      cacheGroups: {
        react: {
          chunks: "all",
          test: /[\\/]node_modules[\\/].*react(.*)/,
          priority: 80,
          name: "react",
        },
        antd: {
          chunks: "all",
          test: /[\\/]node_modules[\\/].*antd(.*)/,
          priority: 80,
          name: "antd",
        },
      },
    },
    // externals: {
    //   lodash: "_",
    //   dayjs: "dayjs",
    // },
  },
};
