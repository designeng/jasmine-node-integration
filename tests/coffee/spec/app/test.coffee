define [
    "when"
    "appbootstrap"
    "moduleHash"
], (WhenP, App, moduleHash) ->

    # WhenP(moduleHash.getModuleAsPromise("footer")).then (target) =>
    #     console.log "FOOTER", target

    #     describe "an async spec - FOOTER", ->
    #         Given ->
    #             console.log "f"
    #         Then ->
    #             expect(target).toBeDefined()

    describe "an async spec - header", ->
        async = new AsyncSpec(@)

        async.afterEach (done) ->
            hash = window.location.hash
            if hash.indexOf("!/header") > 0
                window.location.href = "/tests/#!/footer"
                console.log "redirect to ", window.location.href
            done()
  
        async.it "load header", (done) ->    
            WhenP(moduleHash.getModuleAsPromise("header")).then (target) ->
                console.log "target", target
                expect(target).toBeDefined()
                done()

    # describe "an async spec - footer", ->

    #     async = new AsyncSpec(@)

    #     async.afterEach (done) ->
    #         done()

    #     async.it "load footer", (done) ->
    #         console.log "moduleHash", moduleHash

    #         WhenP(moduleHash.getModuleAsPromise("footer")).then (target) ->
    #             expect(target).toBeDefined()
    #             done()

            