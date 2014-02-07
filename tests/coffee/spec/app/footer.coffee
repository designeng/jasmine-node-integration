define [
    "when"
], (WhenP) ->

    describe "an async spec - footer", ->

       

        async = new AsyncSpec(@)

        async.afterEach (done) ->
            # footerHashResolved = () -> 
            #     def = WhenP.defer()               
            #     hash = window.location.hash
            #     def.resolve(hash.indexOf("!/footer") > 0)
            #     return def.promise

            # WhenP(footerHashResolved()).then () ->
            #     console.log ">>>>>>>>>>>>>>"
            #     setTimeout(()=>
            #         window.location.href = "/tests/#!/sorted-table"
            #     , 300)
            #     console.log "redirect to ", window.location.href
            #     done()
  
        async.it "load footer", (done) ->    
            WhenP(moduleHash.getModuleAsPromise("footer")).then (target) ->
                console.log "FOOTER", target
                expect(target).toBeDefined()
                done()
            