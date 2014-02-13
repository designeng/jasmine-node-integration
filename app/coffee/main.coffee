require [
    "appbootstrap"
    "routemap"
    "sockjs"
], (App, routeMap, SockJS) ->

    options = 
        routeMap: routeMap

    App.start(options)

    console.log "sockjs", SockJS

    # sockjs_url = '/debug/tests/echo'
    sockjs_url = 'http://localhost:9123/debug/tests/echo/info'
    sockjs = new SockJS(sockjs_url)

    sockjs.send App
