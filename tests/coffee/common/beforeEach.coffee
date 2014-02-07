# "extended" loaded on the reason of the need for extensions to the basic objects

define [
    "marionette"
    "Handlebars"
    "appbootstrap"
    "moduleHash"
    "handlebarsHelpers"
    "extended"
], (Marionette, Handlebars, App, moduleHash) ->

    appStarted = false

    # TODO: for usage with trace meld aspect
    # class Reporter
    #     constructor: ->
    #         console.log "Reporter"

    #     onCall: (info) ->
    #         console.log "onCall", info

    #     onReturn: (info) ->
    #         console.log "onReturn", info

    #     onThrow: (info) ->
    #         console.log "onThrow", info

    # reporter = new Reporter() unless reporter?

    startBaseApplication = ->
        console.log "startBaseApplication"
        routeMap = 
            "!/":
                "header" : []
                "content": []
                "footer" : []

            "!/header":
                "header"    : ["header"]
                "content"   : []
                "footer"    : []

            "!/sorted-table":
                "header"    : []
                "content"   : ["sortedTable"]
                "footer"    : []

            "!/footer":
                "header"    : []
                "content"   : []
                "footer"    : ["footer"]

        App.start(
            routeMap: routeMap
        )

        window.moduleHash = moduleHash

        # window.location.href = "/tests/#!/header"

        appStarted = true

        return true

    beforeEach -> 
        loadFixtures("applicationFixture.html")
        loadFixtures("comboboxControlFixture.html")
        loadFixtures("wrapperFixture.html")
        

        # --------------------- all Marionette necessary functions ---------------------
        # code from core/overridden
        Marionette.TemplateCache::loadTemplate = (templateId) ->
            template = templateId
            if not template or template.length is 0
                template = " "                 
            template

        Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
            if !_.isFunction rawTemplate
                Handlebars.compile rawTemplate
            else 
                return rawTemplate
        # ------------------------------------------------------------------------------

        # @addMatchers toBeInstanceOf: (type) ->
        #     @actual instanceof type

        @addMatchers toBeInstanceOf: (expectedInstance) ->
            actual = @actual
            notText = (if @isNot then " not" else "")
            @message = ->
                "Expected " + actual.constructor.name + notText + " is instance of " + expectedInstance.name

            actual instanceof expectedInstance

        if !appStarted
            startBaseApplication()