# autoconcatenation with require.config - see app/coffee/requireConfig.coffee, Gruntfile

# and add to paths jquery.simulate
requirejs.s.contexts._.config["paths"]["jquery.simulate"] = "/tests/js/lib/jquery.simulate"
#index.js - list with runing specs
require [
    "jquery"
    "underscore"
    "when"
    "js/SpecIndex.js"
    "/tests/js/common/beforeEach.js"
    "/tests/js/common/afterEach.js"
], ($, _, WhenP, index) ->

    jasmineEnv = jasmine.getEnv()
    htmlReporter = new jasmine.HtmlReporter()
    jasmineEnv.addReporter htmlReporter
    jasmineEnv.specFilter = (spec) ->
        htmlReporter.specFilter spec

    pathToSpec = "/tests/js/spec/"
    extention = ".js"
    specs = _.map(index.specs, (spec) ->
                    return spec = pathToSpec + spec + extention
                )

    $ ->
        jasmine.getFixtures().fixturesPath = "/tests/fixtures"

        # hack - globals
        window.WhenP = WhenP

        require [
            "js/common/jasmine-given.js"
            "js/lib/jasmine.async.js"
        ], ->
            require specs, ->
                jasmineEnv.execute()

        

