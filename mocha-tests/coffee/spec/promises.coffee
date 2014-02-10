define [
	"when"
    "marionette"
    "PromisesSrc"
	"DeffSrc"
], (WhenP, Marionette, PromisesSrc, DeffSrc) ->

    class TestTest extends Marionette.Controller

        initialize: ->
            # do somth initialization work
            @triggerMethod "init"

        onInit: ->
            describe "Apple", ->
                @.timeout(5000)

                When (done) ->
                    @prom = new DeffSrc()
                    @result = undefined
                    WhenP(@prom).then(
                        (res) =>
                            console.log "RES::::::", res
                            @result = res
                            done()
                        (err) =>
                            console.log "ERR", err
                            done()
                    )

                Then ->
                    expect(@result).to.be.a('object')
                And ->
                    expect(@result).property "one"


    testInstanse = new TestTest()

    return testInstanse
    		
