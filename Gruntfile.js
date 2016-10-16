module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      test: ['./public/*']
    },
    browserify: {
      options: {
           transform: [['babelify', {presets: ['es2015']}]]
        }, 
      './public/index.js': ['./src/index.js']
    },
    uglify: {
      all_src : {
        options : {
          sourceMap : true,
          sourceMapName : 'sourceMap.map'
        },
        src : 'public/index.js',
        dest : 'public/index.js'
      }
    },
    targethtml: {
      dist: {
        files: {
          './public/index.html': 'src/index.html'
        }
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,          
          port: 9001,
          base: './public'
        }
      }
    },
    watch: {
      files: [ 'Gruntfile.js', 'src/**/*.*'],
      tasks: [ 'browserify' ]
    }
  })

   grunt.loadNpmTasks('grunt-contrib-clean')
   grunt.loadNpmTasks('grunt-browserify')
   grunt.loadNpmTasks('grunt-contrib-uglify')
   grunt.loadNpmTasks('grunt-targethtml');
   grunt.loadNpmTasks('grunt-contrib-connect')
   grunt.loadNpmTasks('grunt-contrib-watch')

   grunt.registerTask('delete', ['clean'])
   grunt.registerTask('compile', ['browserify', 'uglify','targethtml'])
   grunt.registerTask('serve', ['delete', 'compile', 'connect', 'watch'])
}