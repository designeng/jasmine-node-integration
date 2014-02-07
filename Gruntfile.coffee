module.exports = (grunt) ->
  
    # Project configuration.
    grunt.initConfig
        watch:
            coffee:
                files: ['tests/coffee/**.coffee']
                # tasks: ['coffee-compile', "start-tests"]
                tasks: ['coffee-compile', "start-tests"]
            js:
                files: ['tests/js/**.js']
                options:
                    livereload: 9000

        coffee:
            each:
                options: {
                    bare: true
                }
                files: [
                    expand: true,
                    cwd: 'tests/coffee',
                    src: ['**/*.coffee'],
                    dest: 'tests/js',
                    ext: '.js'
                ]

        connect:
            server:
                options:
                    port: 9001
                    base: '.'

        exec:
            start_tests:
                command: 'npm start'
                stdout: true
                stderr: true


    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-connect"
    grunt.loadNpmTasks "grunt-exec"

    grunt.registerTask "default", ["connect:server", "watch"]

    # for all at once compilation
    grunt.registerTask "coffee-compile", ["newer:coffee:each"]
    grunt.registerTask "start-tests", ["exec:start_tests"]
    grunt.registerTask "server", ["connect"]