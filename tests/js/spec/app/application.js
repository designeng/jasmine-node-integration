define(["when", "appbootstrap", "moduleHash"], function(When, App, moduleHash) {
  var beforeEachFunc, footerRendered, headerRendered, pageController, routeMap, sortedTableRendered;
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
  When(moduleHash.getModule("header")).then(function(target) {
    return When(target.getComponent().isRendered()).then(function(renderedObject) {
      return headerRendered = true;
    });
  });
  When(moduleHash.getModule("sortedTable")).then(function(target) {
    return When(target.getComponent().isRendered()).then(function(renderedObject) {
      return sortedTableRendered = true;
    });
  });
  When(moduleHash.getModule("footer")).then(function(target) {
    return When(target.getComponent().isRendered()).then(function(renderedObject) {
      return footerRendered = true;
    });
  });
  pageController = null;
  beforeEachFunc = function() {
    App.start({
      routeMap: routeMap
    });
    window.location.href = "/tests/#!/header";
    return runs(function() {
      return pageController = App.pageModule.controller;
    });
  };
  describe("App started", function() {
    beforeEach(function() {
      return beforeEachFunc();
    });
    return Then(function() {
      return expect(App.pageModule.controller.layout).toBeDefined();
    });
  });
  describe("header module rendered", function() {
    beforeEach(function() {
      waitsFor(function() {
        return headerRendered;
      }, "error with headerRendered", 1000);
      return runs(function() {});
    });
    Given(function() {
      return console.log("given");
    });
    When(function() {
      return console.log("WHEN");
    });
    Then(function() {
      return expect(pageController.getPageMap()).toBeDefined();
    });
    Then(function() {
      return expect(pageController.getPageMap()["header"]).toBeArray();
    });
    Then(function() {
      return expect(pageController.getPageMap()["header"].length).toBe(1);
    });
    Then(function() {
      return expect(pageController.getPageMap()["header"][0]).toBe("header");
    });
    return Then(function() {
      return window.location.href = "/tests/#!/sorted-table";
    });
  });
  describe("sortedTable module rendered", function() {
    beforeEach(function() {
      waitsFor(function() {
        return sortedTableRendered;
      }, "error with sortedTableRendered", 1000);
      return runs(function() {
        return console.log("sortedTableRendered", sortedTableRendered);
      });
    });
    Then(function() {});
    return Then(function() {
      window.location.href = "/tests/#!/footer";
      return console.log("----- moved to footer page");
    });
  });
  return describe("footer module rendered", function() {
    beforeEach(function() {
      waitsFor(function() {
        return footerRendered;
      }, "error with footerRendered", 1000);
      return runs(function() {
        return console.log("footerRendered", footerRendered);
      });
    });
    return Then(function() {
      return console.log("do smth");
    });
  });
});
