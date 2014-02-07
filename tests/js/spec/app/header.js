define(["when", "underscore", "moduleHash"], function(WhenP, _, moduleHash) {
  var deferreds;
  deferreds = [];
  moduleHash.getModuleAsPromise("header").then(function(res) {
    console.log("->>", res, deferreds);
    deferreds.push(res);
    return console.log(deferreds);
  });
  moduleHash.getModuleAsPromise("footer").then(function(res) {
    console.log("->>", res, deferreds);
    deferreds.push(res);
    return console.log(deferreds);
  });
  describe("an async spec - start", function() {
    When(function(done) {
      return setTimeout(function() {
        window.location.href = "/tests/#!/header";
        return done();
      }, 1000);
    });
    return Then(function() {
      return console.log("no special, start only");
    });
  });
  describe("an async spec - header", function() {
    When(function(done) {
      return setTimeout(function() {
        window.location.href = "/tests/#!/footer";
        return done();
      }, 1000);
    });
    return Then(function() {
      var mod;
      mod = moduleHash.getModule("header");
      return expect(mod).toBeDefined();
    });
  });
  describe("an async spec - footer", function() {
    return Then(function() {
      return console.log("moduleHash footer", moduleHash.getModule("footer"));
    });
  });
  return WhenP.all(deferreds).then(function(res) {
    return console.log("common >>", res);
  });
});
