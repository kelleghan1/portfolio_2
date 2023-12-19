const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = function override(config) {
  if (!config.plugins) {
    config.plugins = [];
  }

  if (!config?.module?.rules) {
    config.module.rules = [];
  }

  config.module.rules.push({
    test: /\.(jpe?g|png|webp|avif|tiff)$/i,
    type: 'asset',
    generator: {
      filename: () =>  '[name].[contenthash:8].webp'
    }
  })


  config.plugins.push(
    new ImageminWebpWebpackPlugin()
  )

  return config;
}