module.exports = (grunt) ->
  
    # Project configuration.
    grunt.initConfig
        watch:
            coffee:
                files: ['tests/coffee/**.coffee']
                tasks: ['coffee-compile', "start-tests"]
            js:
                files: ['tests/js/**.js']
                options:
                    livereload: true

        coffee:
            each:
                options: {
                    bare: true
                }
                files: [
                    expand: true,
                    cwd: 'tests/coffee',
                    src: ['**/*.coffee'],
                    dest: 'tests/js/',
                    ext: '.js'
                ]

        exec:
            start_tests:
                command: 'npm start'
                stdout: true
                stderr: true


    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-exec"

    grunt.registerTask "default", ["watch"]

    # for all at once compilation
    grunt.registerTask "coffee-compile", ["coffee:each"]
    grunt.registerTask "start-tests", ["exec:start_tests"]