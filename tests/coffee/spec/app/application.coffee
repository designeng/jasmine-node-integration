define [
    "when"
    "appbootstrap"
    "moduleHash"
], (When, App, moduleHash) ->

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

    headerRendered = false
    sortedTableRendered = false
    footerRendered = false

    When(moduleHash.getModule("header")).then((target) ->
        When(target.getComponent().isRendered()).then (renderedObject) ->
            headerRendered = true
    )

    When(moduleHash.getModule("sortedTable")).then((target) ->
        When(target.getComponent().isRendered()).then (renderedObject) ->
            sortedTableRendered = true
    )

    When(moduleHash.getModule("footer")).then((target) ->
        When(target.getComponent().isRendered()).then (renderedObject) ->
            footerRendered = true
    ) 

    pageController = null

    # it will be invoked once, in "App started" section
    beforeEachFunc = () ->
        App.start(
            routeMap: routeMap
        )

        # navigate to initial page
        window.location.href = "/tests/#!/header"

        runs ->
            pageController = App.pageModule.controller  

    describe "App started", ->
        beforeEach ->
            beforeEachFunc()   

        Then ->
            expect(App.pageModule.controller.layout).toBeDefined()

    describe "header module rendered", ->
        beforeEach -> 
            waitsFor(()->
                    return headerRendered
                , "error with headerRendered", 1000)
            runs ->

        Given ->
            console.log "given"

        When ->
            console.log "WHEN"

        Then ->
            expect(pageController.getPageMap()).toBeDefined()
        Then ->
            expect(pageController.getPageMap()["header"]).toBeArray()
        Then ->
            expect(pageController.getPageMap()["header"].length).toBe 1
        Then ->
            expect(pageController.getPageMap()["header"][0]).toBe "header"

        # after all navigate to the next page
        Then ->
            window.location.href = "/tests/#!/sorted-table"

    describe "sortedTable module rendered", ->
        beforeEach ->
            waitsFor(()->
                    return sortedTableRendered
                , "error with sortedTableRendered", 1000)
            runs ->
                console.log "sortedTableRendered", sortedTableRendered

        Then ->

        # after all navigate to the next page
        Then ->
            window.location.href = "/tests/#!/footer"
            console.log "----- moved to footer page"


    describe "footer module rendered", ->
        beforeEach ->
            waitsFor(()->
                    return footerRendered
                , "error with footerRendered", 1000)
            runs ->
                console.log "footerRendered", footerRendered

        Then ->
            console.log "do smth"

