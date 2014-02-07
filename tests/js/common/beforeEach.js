define(["marionette", "Handlebars", "appbootstrap", "moduleHash", "handlebarsHelpers", "extended"], function(Marionette, Handlebars, App, moduleHash) {
  var appStarted, startBaseApplication;
  appStarted = false;
  startBaseApplication = function() {
    var routeMap;
    console.log("startBaseApplication");
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
    App.start({
      routeMap: routeMap
    });
    window.moduleHash = moduleHash;
    appStarted = true;
    return true;
  };
  return beforeEach(function() {
    loadFixtures("applicationFixture.html");
    loadFixtures("comboboxControlFixture.html");
    loadFixtures("wrapperFixture.html");
    Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
      var template;
      template = templateId;
      if (!template || template.length === 0) {
        template = " ";
      }
      return template;
    };
    Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
      if (!_.isFunction(rawTemplate)) {
        return Handlebars.compile(rawTemplate);
      } else {
        return rawTemplate;
      }
    };
    this.addMatchers({
      toBeInstanceOf: function(expectedInstance) {
        var actual, notText;
        actual = this.actual;
        notText = (this.isNot ? " not" : "");
        this.message = function() {
          return "Expected " + actual.constructor.name + notText + " is instance of " + expectedInstance.name;
        };
        return actual instanceof expectedInstance;
      }
    });
    if (!appStarted) {
      return startBaseApplication();
    }
  });
});
