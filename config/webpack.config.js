const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  stats: {
    moduleAssets: false,
    modules: false,
    builtAt: true,
  },
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.[sa|sc|c]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: "asset",
        generator: {
          filename: "static/images/[contenthash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(otf|eot|woff2?|ttf|svg)$/i,
        type: "asset",
        generator: {
          filename: "static/fonts/[hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(txt|xml)$/i,
        type: "asset",
        generator: {
          filename: "static/file/[contenthash:8][ext]",
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[contenthash:8][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "#": resolve(__dirname, "src/components"),
      "@": resolve(__dirname, "src/modules"),
      assets: resolve(__dirname, "src/assets"),
    },
  },
  plugins: [
    require("unplugin-auto-import/webpack")({
      include: [/\.[tj]sx?$/],
      imports: [
        "react",
        "react-router-dom",
        {
          axios: [["default", "axios"]],
        },
      ],
      dirs: ["src/auto-imports"],
      dts: "./auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: true, //去空格
        removeComments: true, // 去注释
      },
    }),
    new MiniCssExtractPlugin({
      filename: "static/style/[contenthash:8].css",
    }),
  ],
};
