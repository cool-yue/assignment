const webpackConfig = require('./build/webpack.prod.js');

module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai', 'sinon'],
      files: ['src/test/**/*.spec.js'],
      preprocessors: {
        '**/*.spec.js': ['webpack', 'sourcemap']
      },
      webpack: webpackConfig,
      reporters: ['spec', 'coverage'],
      coverageReporter: {
        dir: './coverage',
        reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
      },
      logLevel: config.LOG_INFO,
      // 不要中间编译的信息
      webpackMiddleware: {
        noInfo: true
      },
      browsers: ['Chrome']
    });
};