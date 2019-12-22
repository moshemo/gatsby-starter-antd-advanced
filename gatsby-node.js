const path = require("path")

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "babel-plugin-import",
    options: {
      libraryName: "antd",
      style: true,
    },
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        SRC: path.resolve(__dirname, "src"),
        Assets: path.resolve(__dirname, "src/assets"),
        Components: path.resolve(__dirname, "src/components"),
        Layouts: path.resolve(__dirname, "src/layouts"),
        Pages: path.resolve(__dirname, "src/pages"),
        Static: path.resolve(__dirname, "static"),
      },
    },
  })
}
