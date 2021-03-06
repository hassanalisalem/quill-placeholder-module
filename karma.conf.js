// Karma configuration
// Generated on Tue Jul 11 2017 01:31:57 GMT+0200 (CEST)
const {resolve} = require('path')
const webpack = require('webpack')
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'test/fixtures/*',
      'node_modules/quill/dist/quill.js',
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
      'test/fixtures/*.html': ['html2js']
    },

    webpack: {
      entry: resolve(__dirname, 'src', 'placeholder-module.ts'),
      module: {
        rules: [{
          test: /\.ts$/,
          include: [resolve(__dirname, 'src')],
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: [['es2015', {modules: false}]]
              }
            },
            'ts-loader'
          ]
        }]
      },
      resolve: {
        extensions: ['.ts']
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery'
        })
      ],
      devtool: 'inline-source-map'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
