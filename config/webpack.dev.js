const path = require("path");
module.exports = {
  devtool: "eval-cheap-module-source-map",
  mode: "development",
  devServer: {
    compress: true,
    // port: 3000,
    open: true,
    hot: true,
    //   proxy,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../public"),
    },
  },
};
