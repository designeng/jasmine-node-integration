define(["when"], function(WhenP) {
  var AppSpec, appSpec;
  AppSpec = (function() {
    AppSpec.prototype.currentSpec = null;

    function AppSpec(spec) {
      Mocha.AgentApp = {};
      this.currentSpec = spec;
    }

    AppSpec.prototype.setSpec = function(spec) {
      spec.setPromise = this.setPromise;
      this.currentSpec = spec;
      return this.onSpecSetted();
    };

    AppSpec.prototype.getSpec = function() {
      return this.currentSpec;
    };

    AppSpec.prototype.removeSpec = function() {
      return this.currentSpec = null;
    };

    AppSpec.prototype.setPromise = function(promise, target, resultProp, doneFn) {
      var _this = this;
      return WhenP(promise).then(function(res) {
        target[resultProp] = res;
        return doneFn();
      }, function(err) {
        console.log("ERR", err);
        return doneFn();
      });
    };

    AppSpec.prototype.onSpecSetted = function() {
      return Mocha.AgentApp.spec = this.currentSpec;
    };

    return AppSpec;

  })();
  if (!appSpec) {
    appSpec = new AppSpec();
  }
  return appSpec;
});
