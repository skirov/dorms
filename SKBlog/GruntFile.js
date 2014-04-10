module.exports = function (grunt) {
	/**
	 * Grunt configurations
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			minify: {
				src: 'css/style.css',
				dest: 'css/style.min.css'
			}
		}
	});

	/**
	 * Load grunt plugins
	 */
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	/**
	 * Create tasks
	 */
	grunt.registerTask('default', ['cssmin']);
}