module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
          files: [{
            expand: true,
            cwd: 'src/client/sass',
            src: ['**/*.scss'],
            dest: 'src/client/public/css',
            ext: '.css'
          }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');


  grunt.registerTask('default', ['jshint', 'sass:dist']);

};