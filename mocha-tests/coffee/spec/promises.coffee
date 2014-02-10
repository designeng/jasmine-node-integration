define [
	"when"
	"PromisesSrc"
], (WhenP, PromisesSrc) ->

    class TestTest
        constructor: ->
            describe "Apple", ->
                beforeEach ->
                    console.log "beforeEach"
                    @prom = new PromisesSrc()

                afterEach ->
                    console.log "afterEach"
                    delete @prom

                it "should", ->
                    console.log @
                    expect(@prom).property "one"

                console.log "WITH", @

                return


    testInstanse = new TestTest()

    console.log testInstanse

    return testInstanse



    # prom = undefined
    # console.log "PromisesSrc 1--- ", PromisesSrc
    # describe "Apple", ->
    # 	beforeEach ->
    #         console.log "Promises", PromisesSrc
    # 	    prom = new PromisesSrc()
    # 	    console.log "@promises::::::", prom

  	# 	afterEach ->
   #  		delete prom

  	# 	it "should", ->
   #  		expect(@promises).property "_message"

  	# 	it "should", (done) ->
   #  		# @promises.then (
   #  		# 	(res) ->
   #  		# 		console.log "RES", res
   #  		# 		done()
   #  		# 	(err) ->
   #  		# 		console.log "ERR", err
   #  		# 		done()
   #  		# )
			# prom.then (res)->
			# 	console.log res
   #  			# done()
    		
