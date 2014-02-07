module.exports = (grunt) ->

    port = 9001
  
    # Project configuration.
    grunt.initConfig
        watch:
            coffee_app:
                files: ['app/coffee/**/**.coffee']
                tasks: ["coffee-compile-app"]
            coffee_tests:
                files: ['tests/coffee/**/**.coffee']
                # tasks: ['coffee-compile', "start-tests"]
                tasks: ["coffee-compile-tests"]
            js:
                files: ['tests/js/**/**.js']
                options:
                    livereload: 9000

        coffee:
            tests:
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
            app:
                options: {
                    bare: true
                }
                files: [
                    expand: true,
                    cwd: 'app/coffee',
                    src: ['**/*.coffee'],
                    dest: 'app/js',
                    ext: '.js'
                ]

        insert:
            options: {}
            main:
                src: "app/coffee/requireConfig.coffee",
                dest: "tests/coffee/SpecRunner.coffee",
                match: "# requirejs-config here"

        connect:
            server:
                options:
                    port: port
                    base: '.'
            testUrls:
                options:
                    port: port,
                    base: '.'

        # mocha testUrls
        mocha:
            testUrls:
                options:
                    mocha:
                        ignoreLeaks: false
                        grep: 'food'

                reporter: 'Nyan'

                urls: ['http://localhost:' + port + '/mocha-test/test2.html'],

                run: true

        exec:
            start_tests:
                command: 'npm start'
                stdout: true
                stderr: true


    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-connect"
    grunt.loadNpmTasks "grunt-exec"
    grunt.loadNpmTasks "grunt-newer"
    grunt.loadNpmTasks "grunt-insert"
    grunt.loadNpmTasks "grunt-mocha"

    grunt.registerTask "default", ["connect:server", "watch"]

    # for all at once compilation
    grunt.registerTask "coffee-compile-tests", ["newer:coffee:tests"]
    grunt.registerTask "coffee-compile-app", ["newer:coffee:app"]
    grunt.registerTask "start-tests", ["exec:start_tests"]
    grunt.registerTask "server", ["connect"]
    grunt.registerTask "inc", ["insert", "coffee-compile-tests", "default"]

    grunt.registerTask 'testUrls', ['connect:testUrls', 'mocha:testUrls', 'watch']