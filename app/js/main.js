require(["appbootstrap", "routemap", "sockjs"], function(App, routeMap, SockJS) {
  var options, sockjs, sockjs_url;
  options = {
    routeMap: routeMap
  };
  App.start(options);
  console.log("sockjs", SockJS);
  sockjs_url = 'http://localhost:9123/debug/tests/echo/info';
  sockjs = new SockJS(sockjs_url);
  return sockjs.send(App);
});
