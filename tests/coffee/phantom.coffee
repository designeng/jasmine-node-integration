console.log "Loading a web page 1"
page = new WebPage()

#This was tricky, this is the way to open LOCAL files
url = "http://127.0.0.1:8877/test/teamcity_reporter.html"
phantom.viewportSize =
  width: 800
  height: 600


#This is required because PhantomJS sandboxes the website and it does not show up the console messages form that page by default
page.onConsoleMessage = (msg) ->
  console.log msg


#Open the website
page.open url, (status) ->
  
  #Page is loaded!
  if status isnt "success"
    console.log "Unable to load the address!"
  else
    
    #Using a delay to make sure the JavaScript is executed in the browser
    window.setTimeout (->
      page.render "output.png"
      phantom.exit()
    ), 200
