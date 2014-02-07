define(["when"], function(WhenP) {
  return describe("an async spec - footer", function() {
    var async;
    async = new AsyncSpec(this);
    async.afterEach(function(done) {});
    return async.it("load footer", function(done) {
      return WhenP(moduleHash.getModuleAsPromise("footer")).then(function(target) {
        console.log("FOOTER", target);
        expect(target).toBeDefined();
        return done();
      });
    });
  });
});
