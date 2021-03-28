const path = require('path');
/**Plugin to move html files to diferent 
 * locations with different configurations.
 **/
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    /**__direname is positioning the 
     * path in out current folder.
     * dist is going to be our production folder.
     **/
    path: path.join(__dirname, '/public/build'),
    filename: 'bundle.js'
  },
  /**
   * Files extensions that we are going to use.
   * '*' everithing.
   * '.mjs' module js, svelte use it like a module.
   * '.js' normal js.
   * '.svelte' our curret technology extension.
   */
  resolve: {
    extensions: ['*', '.mjs', '.js', '.svelte']
  },
  module: {
    /**
     * Rules, usually used to load the loaders,
     * like svelte loaders, babel loader for transpilations.
     */
    rules: [
      {
        /**
         * Detecting js files.
         * excluding the nomde_modules folder.
         */
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svelte?$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader'
        }
      }
    ]
  },
  /**
   * Plugins
   */
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      /**
       * Filename, result file after the plugin
       * transformation.
       */
      filename: './index.html'
    })
  ]
};