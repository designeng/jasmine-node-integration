define(["when", "appbootstrap", "moduleHash"], function(When, App, moduleHash) {
  var footerRendered, headerRendered, pageController, routeMap, sortedTableRendered;
  routeMap = {
    "!/": {
      "header": [],
      "content": [],
      "footer": []
    },
    "!/header": {
      "header": ["header"],
      "content": [],
      "footer": []
    },
    "!/sorted-table": {
      "header": [],
      "content": ["sortedTable"],
      "footer": []
    },
    "!/footer": {
      "header": [],
      "content": [],
      "footer": ["footer"]
    }
  };
  headerRendered = false;
  sortedTableRendered = false;
  footerRendered = false;
  pageController = null;
  return describe("App started", function() {
    beforeEach(function() {
      return App.start({
        routeMap: routeMap
      });
    });
    return it("------", function() {
      return runs(function() {
        console.log(123);
        return target.getComponent().isRendered().then(function(target) {
          return console.log(target);
        });
      });
    });
  });
});
