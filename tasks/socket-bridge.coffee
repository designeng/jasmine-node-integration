module.exports = (grunt) ->
	grunt.task.registerTask "socket-bridge", ()->
		http = require("http")
		sockjs = require("sockjs")
		node_static = require("node-static")

		# 1. Echo sockjs server
		sockjs_opts = sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js"
		sockjs_echo = sockjs.createServer(sockjs_opts)
		sockjs_echo.on "connection", (conn) ->
		  	conn.on "data", (message) ->
		    	conn.write message
		    	console.log "message", message

		# 2. Static files server
		static_directory = new node_static.Server(__dirname)

		# 3. Usual http stuff
		server = http.createServer()
		server.addListener "request", (req, res) ->
			res.header "Access-Control-Allow-Origin", "*"
			static_directory.serve req, res

		server.addListener "upgrade", (req, res) ->
		  	res.end()

		sockjs_echo.installHandlers server,
		  	prefix: "/debug/tests/echo"

		console.log " [*] Listening on 0.0.0.0:9123"
		server.listen 9123, "0.0.0.0"