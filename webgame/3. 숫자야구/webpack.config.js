const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "number-baseball-dev",
  mode: "development", // 실서비스: production
  devtool: "eval", // 빠르게
  // 확장자로 한번에 입력
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["> 1% in KR"] }, // browserslist
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            // "@babel/plugin0proposal-class-properties",
            "react-refresh/babel",
          ],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"), // 실제 경로
    filename: "app.js",
    publicPath: "/dist", // webpack-dev-server가 작동하는 결과물간의 상대 경로
  }, // 출력
  devServer: {
    hot: true,
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
  },
};
