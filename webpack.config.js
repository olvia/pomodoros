const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const HandlebarsPlugin = require('handlebars-webpack-plugin');
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

// const webpackConfig = {
//   plugins: [

//     new HandlebarsPlugin({
//       // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
//       entry: path.join(process.cwd(), "app", "src", "*.hbs"),
//       // output path and filename(s). This should lie within the webpacks output-folder
//       // if ommited, the input filepath stripped of its extension will be used
//       output: path.join(process.cwd(), "build", "[name].html"),
//       // you can als add a [path] variable, which will emit the files with their relative path, like
//       // output: path.join(process.cwd(), "build", [path], "[name].html"),
      
//       // data passed to main hbs template: `main-template(data)`
//       data: require("./app/data/project.json"),
//       // or add it as filepath to rebuild data on change using webpack-dev-server
//       data: path.join(__dirname, "app/data/project.json"),

//       // globbed path to partials, where folder/filename is unique
//       partials: [
//         path.join(process.cwd(), "app", "src", "components", "*", "*.hbs")
//       ],

//       // register custom helpers. May be either a function or a glob-pattern
//       helpers: {
//         nameOfHbsHelper: Function.prototype,
//         projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
//       },

//       // hooks
//       // getTargetFilepath: function (filepath, outputTemplate) {},
//       // getPartialId: function (filePath) {}
//       onBeforeSetup: function (Handlebars) {},
//       onBeforeAddPartials: function (Handlebars, partialsMap) {},
//       onBeforeCompile: function (Handlebars, templateContent) {},
//       onBeforeRender: function (Handlebars, data, filename) {},
//       onBeforeSave: function (Handlebars, resultHtml, filename) {},
//       onDone: function (Handlebars, filename) {}
//     })
//   ]
// };

module.exports = {
  mode: 'none',
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      '@less-helpers-module': path.resolve(__dirname, 'src/assets/less/helpers'), // alias for less helpers
      '@assets-root-path': path.resolve(__dirname, 'src/assets') // alias for assets (use for images & fonts)
    }
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    },{
      test: /\.hbs/,
      loader: 'handlebars-loader',
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  // { test: /\.handlebars$/, 
  //   loader: "handlebars-loader" 
  // }
  ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new CopyWebpackPlugin([
      'src/index.html', // will copy to root of outDir (./dist folder)
      {
        from: 'src/static/',
        to: 'static'
      },
      {
        from: 'src/assets/images',
        to: 'images'
      },
      {
        from: 'src/assets/fonts',
        to: 'fonts'
      }
    ])
  ],
  devServer: {
    contentBase: './dist',
    port: 3000
  }
};


