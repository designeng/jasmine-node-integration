define [
	"when"
	"pageModule"

	# src:
	"PromisesSrc"
], (WhenP, PageModule, Promises) ->

	describe "Apple", ->
	  	beforeEach ->
	    	@promises = new Promises()
	    	console.log "@promises", @promises

  		afterEach ->
    		delete @promises

  		it "should", ->
    		expect(@promises).property "_message"