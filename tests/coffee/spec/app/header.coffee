define [
    "when"
    "underscore"
    "moduleHash"
], (WhenP, _, moduleHash) ->

    # intervalID = setInterval(()=>
    #     hash = window.location.href
    #     if hash.indexOf("!/footer") > 0
    #         isFooterHash = true
    #         clearInterval(intervalID)

    # , 0)

    # beforeEachFunc = () ->
    #     waitsFor ()->
    #             return isFooterHash
    #         , "error with footer hash", 3000
    #     runs ->
    #         console.log "footer start"

    # describe "an async spec - sortedTable", ->
    #     sortedTable = undefined
    #     When (done) ->
    #         WhenP(moduleHash.getModuleAsPromise("sortedTable")).then (target) ->
    #             console.log "SORTED TABLE", target
    #             sortedTable = target
    #             done()

    #     Then ->
    #         console.log "sortedTable>>>>", sortedTable
    #         expect(sortedTable).not.toBeDefined()

    # describe "an async spec - footer", ->
    #     footer = undefined
    #     When (done) ->
    #         WhenP(moduleHash.getModuleAsPromise("footer")).then (target) ->
    #             console.log "FOOTER", target
    #             footer = target
    #             done()

    #     Then ->
    #         expect(footer).not.toBeDefined()
    #     And ->
    #         setTimeout(()=>
    #                 window.location.href = "/tests/#!/sorted-table"
    #             , 2000)

    # describe "an async spec - header", ->
    #     header = undefined
    #     When (done) ->
    #         WhenP(moduleHash.getModuleAsPromise("header")).then (target) ->
    #             console.log "HEADER", target
    #             header = target
    #             done()

    #     Then ->
    #         expect(header).not.toBeDefined()
    #     And ->
    #         setTimeout(()=>
    #                 window.location.href = "/tests/#!/footer"
    #             , 1000)         

# async ========================================================================


    # WhenP(moduleHash.getModuleAsPromise("header")).then (target) =>
    #     console.log "TARGET", target, @
    #     console.log @
    #     describe "header target", ->
    #         header = undefined
    #         it "header 1", ->
    #             expect(header).not.toBeDefined()
        # expect(target).toBeDefined()
    # proms = []
    # routed = () ->
    #     def = WhenP.defer()
    #     setTimeout(()=>
    #         window.location.href = "/tests/#!/header"
    #         proms.push moduleHash.getModuleAsPromise("header")
    #     , 1000)
    #     setTimeout(()=>
    #         window.location.href = "/tests/#!/footer"
    #         proms.push moduleHash.getModuleAsPromise("footer")
    #     , 1500)
    #     setTimeout () =>
    #         def.resolve(1)
    #     , 2000
    #     return def.promise

    # proms.push routed()
    deferreds = []
    
    moduleHash.getModuleAsPromise("header").then(
            (res)->
                console.log "->>", res, deferreds
                deferreds.push res
                console.log deferreds
        )

    moduleHash.getModuleAsPromise("footer").then(
            (res)->
                console.log "->>", res, deferreds
                deferreds.push res
                console.log deferreds
        )

    describe "an async spec - start", ->
        When (done) ->
            setTimeout () ->
                    window.location.href = "/tests/#!/header"
                    done()
                , 1000
        Then ->
            console.log "no special, start only"

    describe "an async spec - header", ->             

        When (done) ->
            setTimeout () ->
                    window.location.href = "/tests/#!/footer"
                    done()
                , 1000
            

        Then ->
            mod = moduleHash.getModule "header"
            expect(mod).toBeDefined()

    describe "an async spec - footer", ->             

        # When (done) ->
        #     setTimeout () ->
        #             window.location.href = "/tests/#!/footer"
        #             done()
        #         , 2000

        Then ->
            console.log "moduleHash footer", moduleHash.getModule "footer"

    WhenP.all(deferreds).then(
            (res)->
                console.log "common >>", res
        )
        

        # async.afterEach (done) ->
        #     hash = window.location.hash
        #     if hash.indexOf("!/header") > 0
        #         setTimeout(()=>
        #             window.location.href = "/tests/#!/footer"
        #         , 1000)
        #         console.log "redirect to ", window.location.href
        #     done()



        # WhenP(routed()).then ()->
        #     done()


        # async.beforeEach (done) ->
        

            

  
        # async.it "load header", (done) -> 
        #     proms = []  

        #     proms.push moduleHash.getModuleAsPromise("header")
        #     # proms.push moduleHash.getModuleAsPromise("footer")

        #     WhenP.all(proms).then (target) ->
        #         console.log target
        #         expect(target).toBeArray()
        #         # expect(target[0]).toBeDefined()
        #         # expect(target[1]).toBeDefined()

        #         done()

            # WhenP(moduleHash.getModuleAsPromise("header")).then (target) ->
            #     console.log "HEADER", target
            #     expect(target).toBeDefined()
            #     done()
            # WhenP(moduleHash.getModuleAsPromise("footer")).then (target) ->
            #     console.log "FOOTER", target
            #     expect(target).not.toBeDefined()
            #     done()

        # async.it "load footer", (done) ->    
        #     WhenP(moduleHash.getModuleAsPromise("footer")).then (target) ->
        #         console.log "FOOTER", target
        #         expect(target).toBeDefined()
        #         done()


    # header = 1

    # describe "header", ->
    #     console.log "CONTEXT IN DESCR:", @

    #     Given ->
    #         console.log "GIVEN"
        
    #     When (done) ->
    #         (moduleHash.getModuleAsPromise("header")).then (mod)->
    #             console.log "MOD", mod
    #             header = mod
    #             done()
    #     Then ->
    #         console.log "THEN", header.component
    #         expect(header.component).toBe(1)
    #     Then ->
    #         console.log "THEN", header.declaration
    #         expect(header.declaration).not.toBeObject()



            