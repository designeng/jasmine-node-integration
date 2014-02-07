define [
    "when"
], (WhenP) ->

    isFooterHash = false

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
    # describe "an async spec - header", ->
    #     async = new AsyncSpec(@)

    #     async.afterEach (done) ->
    #         hash = window.location.hash
    #         if hash.indexOf("!/header") > 0
    #             setTimeout(()=>
    #                 window.location.href = "/tests/#!/footer"
    #             , 1000)
    #             console.log "redirect to ", window.location.href
    #         done()
  
    #     async.it "load header", (done) ->    
    #         WhenP(moduleHash.getModuleAsPromise("header")).then (target) ->
    #             console.log "HEADER", target
    #             expect(target).toBeDefined()
    #             done()


    WhenP(moduleHash.getModuleAsPromise("header")).then (target) ->
        console.log ">>>>", target
        # expect(target).toBeDefined()


            