module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['resources/sass/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      concat: {
        files: ['resources/js/**/*.js'],
        tasks: ['concat', 'uglify']
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'app/assets/css/app.css': 'resources/sass/app.scss'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'node_modules/angular/angular.min.js',
          'node_modules/angular-ui-router/release/angular-ui-router.min.js',
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
          'resources/js/**/*.js'
        ],
        dest: 'app/assets/js/app.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'app/assets/js/app.min.js': 'app/assets/js/app.js'
        }
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/',
        src: '**',
        dest: 'app/assets/fonts/bootstrap/',
      }
    }
  });

  grunt.registerTask('default', ['sass:dist', 'concat', 'copy', 'uglify', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
