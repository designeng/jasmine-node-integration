define(["when"], function(WhenP) {
  var isFooterHash;
  isFooterHash = false;
  return describe("an async spec - header", function() {
    var async;
    async = new AsyncSpec(this);
    async.afterEach(function(done) {
      var hash,
        _this = this;
      hash = window.location.hash;
      if (hash.indexOf("!/header") > 0) {
        setTimeout(function() {
          return window.location.href = "/tests/#!/footer";
        }, 1000);
        console.log("redirect to ", window.location.href);
      }
      return done();
    });
    return async.it("load header", function(done) {
      return WhenP(moduleHash.getModuleAsPromise("header")).then(function(target) {
        console.log("HEADER", target);
        expect(target).toBeDefined();
        return done();
      });
    });
  });
});
