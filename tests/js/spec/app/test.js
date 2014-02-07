define(["when", "appbootstrap", "moduleHash"], function(WhenP, App, moduleHash) {
  return describe("an async spec - header", function() {
    var async;
    async = new AsyncSpec(this);
    async.afterEach(function(done) {
      var hash;
      hash = window.location.hash;
      if (hash.indexOf("!/header") > 0) {
        window.location.href = "/tests/#!/footer";
        console.log("redirect to ", window.location.href);
      }
      return done();
    });
    return async.it("load header", function(done) {
      return WhenP(moduleHash.getModuleAsPromise("header")).then(function(target) {
        console.log("target", target);
        expect(target).toBeDefined();
        return done();
      });
    });
  });
});
