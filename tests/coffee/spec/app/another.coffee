define [
    "when"
], (WhenP) ->

    describe "another", ->

        anotherStart = false

        setTimeout(()=>
            anotherStart = true
        , 1000)

        Then ->

            waitsFor ()->
                    return anotherStart
                , "error with anotherStart", 3000

            runs ->
                expect("test").toBe "test"
                expect("another").toBe "another"

            # waits(3000)

            runs ->
                console.log "runs 2"

