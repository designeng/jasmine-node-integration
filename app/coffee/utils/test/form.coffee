define [
	"marionette"
	"sockjs"
	"hbs!templates/test/form"
], (Marionette, SockJS, formTpl)->

	FormSocket = Marionette.Layout.extend

		template: formTpl

		initialize: (options) ->
			_.bindAll @, "print"
			@sockjs_url = 'http://localhost:9123/echo'
			@sockjs = new SockJS(@sockjs_url)

		onRender: ->
			@$el.find("#first input").focus()
        




   #      template: formTpl
   #      initialize: (options) -> 
			# _.bindAll @, "print"
			# @sockjs_url = 'http://localhost:9123/echo'
			# @sockjs = new SockJS(@sockjs_url)

		#       onRender: ->
		# 	@$el.find("#first input").focus()

		# 	@div = @$el("#first div")
		# 	@inp = @$el("#first input")
		# 	@form = @$el("#first form")

		# 	@sockjs.onopen = () =>
		# 	 	@print "[*] open", @sockjs.protocol

		# 	@sockjs.onmessage = (e) =>
		# 	  	@print "[.] message", e.data

		# 	@sockjs.onclose = () =>
		# 	  	@print "[*] close"

		# 	@form.submit = () =>
		# 	  	@print "[ ] sending", @inp.val()
		# 	  	@sockjs.send @inp.val()
		# 	  	@inp.val ""
		# 	  	false

		# print: (m, p) ->
		# 	p = (if (p is "undefined") then "" else JSON.stringify(p))
		# 	@div.append @$el("<code>").text(m + " " + p)
		# 	@div.append @$el("<br>")
		# 	@div.scrollTop @div.scrollTop() + 10000

	return FormSocket


	
