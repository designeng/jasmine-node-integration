define [
    "when"
], (WhenP) ->
    class AppSpec
        currentSpec: null

        constructor: (spec) ->
            Mocha.AgentApp = {}

            @currentSpec = spec

        setSpec: (spec) ->
            spec.setPromise = @setPromise
            @currentSpec = spec
            @onSpecSetted()

        getSpec: ->
            return @currentSpec

        removeSpec: ->
            @currentSpec = null

        setPromise: (promise, target, resultProp, doneFn) ->
            WhenP(promise).then(
                (res) =>
                    # console.log "RES::::::", res
                    target[resultProp] = res
                    doneFn()
                (err) =>
                    console.log "ERR", err
                    doneFn()
            )

        # is it needded?
        onSpecSetted: ->
            Mocha.AgentApp.spec = @currentSpec


    if !appSpec
        appSpec = new AppSpec()

    return appSpec