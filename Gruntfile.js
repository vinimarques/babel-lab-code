module.exports = function(grunt) {
	grunt.initConfig({
		babel: {
	    options: {
	      sourceMap: true
	    },
	    dist: {
	      files: {
	        "dist/app.js": "app/js/*.js"
	      }
	    }
	  },
		copyto: {
			stuff: {
				files: [{
					cwd: 'app/public/',
					src: ['**/*'],
					dest: 'dist/',
					expand: true
				}]
			}
		},
		watch: {
			js: {
				files: ['**/*.js'],
				tasks: ['babel'],
				options: {
					cwd: 'app/js/',
					livereload: true,
					atBegin: true
				}
			},
			copyto: {
				files: ['**/*'],
				tasks: ['copyto:stuff'],
				options: {
					cwd: 'app/public/',
					livereload: true,
					atBegin: true
				}
			}
		}
	});

	grunt.event.on('watch', function(action, filepath, target) {
		var notify = require('./node_modules/grunt-notify/lib/notify-lib.js');
		notify({
			message: filepath + ' has ' + action
		});
	});

	
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-copy-to');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-watch');
};