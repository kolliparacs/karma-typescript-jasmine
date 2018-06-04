// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
	config.set({
		frameworks: [ 'jasmine', 'karma-typescript' ],
		browsers: [ 'Chrome' ],
		reporters: [ 'progress', 'karma-typescript' ],
		autoWatch: true,
		singleRun: false,
		files: [
      { pattern: './src/**/*.spec.ts'},
      { pattern: './src/**/*.ts'},
      { pattern: './src/**/*.html'},
			{ pattern: './node_modules/**/*.ts', included: false }
		],
		preprocessors: {
			'./src/**/*.ts': [ 'karma-typescript' ]
		},
		karmaTypescriptConfig: {
			compilerOptions: {
				sourceMap: true,
				target: 'ES5',
        allowJs: true,
        lib:['es5', 'es6', 'dom']
			},
			reports: {
				html: 'tests/coverage',
				text: ''
      }
    }
		// ,
		// logLevel: config.LOG_DEBUG
	});
};
