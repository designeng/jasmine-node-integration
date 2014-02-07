define [
    "when"
], (WhenP) ->

    isFooterHash = false

    # setInterval(()=>
    #     hash = window.location.href
    #     console.log hash
    #     if hash.indexOf("!/footer") > 0
    #         console.log "isFooterHash", isFooterHash
    #         isFooterHash = true
    # , 10)

    describe "an async spec - header", ->
        async = new AsyncSpec(@)

        async.afterEach (done) ->
            hash = window.location.hash
            if hash.indexOf("!/header") > 0
                setTimeout(()=>
                    window.location.href = "/tests/#!/footer"
                , 1000)
                console.log "redirect to ", window.location.href
            done()
  
        async.it "load header", (done) ->    
            WhenP(moduleHash.getModuleAsPromise("header")).then (target) ->
                console.log "HEADER", target
                expect(target).toBeDefined()
                done()

    # describe "an async spec - footer", ->
    #     waitsFor(()->
    #             return isFooterHash
    #         , "error with footer hash", 3000)
    #     runs ->
    #         console.log "footer start"

    #     it "f", ->
    #         console.log "123"

            