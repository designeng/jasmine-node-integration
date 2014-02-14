define [
	"marionette"
	"sockjs"
	"hbs!templates/test/form"
], (Marionette, SockJS, formTpl)->

	FormSocket = Marionette.Layout.extend

		template: formTpl

		events:
			"click span.button": "onClick"

		initialize: (options) ->
			_.bindAll @, "print"
			@sockjs_url = 'http://localhost:9123/echo'
			@sockjs = new SockJS(@sockjs_url)

			@sockjs.onopen = () =>
			 	@print "[*] open", @sockjs.protocol

			@sockjs.onmessage = (e) =>
			  	@print "[.] message", e.data

			@sockjs.onclose = () =>
			  	@print "[*] close"

		onRender: ->
			@$el.find("#first input").focus()

			@div = @$el.find("#first div")
			@inp = @$el.find("#first input")
			@form = @$el.find("#first form")
			@button = @$el.find("span.button")

		onClick: ->
			console.log "----------------", @sockjs
			console.log "@inp.val()", @inp.val()
			@print "[ ] sending", @inp.val()
			@sockjs.send @inp.val()
			@inp.val ""

		print: (m, p) ->
			p = (if (p is "undefined") then "" else JSON.stringify(p))
			@div.append($("<code>").text(m + " " + p))
			@div.append($("<br>"))
			@div.scrollTop(@div.scrollTop() + 10000)
        

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



	return FormSocket


	
