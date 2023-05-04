const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack的配置信息都应该写在module.exports里

module.exports = {
  mode: "development",
  //指定入口文件
  entry: "./src/index.ts",

  //指定打包文件所在路径
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),

    //打包后的文件
    filename: "bundle.js",
  },

  //webpack打包时需要使用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.ts$/,
        //要使用的loader

        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets: {
                      chrome: "88",
                    },
                    //指定corejs的版本
                    corejs: "3",
                    //使用corejs的方法 "usage"表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],

        //要排除的文件
        exclude: /node-module/,
      },
    ],
  },

  //配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  //用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
