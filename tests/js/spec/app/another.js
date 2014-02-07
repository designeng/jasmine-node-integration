define(["when"], function(WhenP) {
  return describe("another", function() {
    var anotherStart,
      _this = this;
    anotherStart = false;
    setTimeout(function() {
      return anotherStart = true;
    }, 1000);
    return Then(function() {
      waitsFor(function() {
        return anotherStart;
      }, "error with anotherStart", 3000);
      runs(function() {
        expect("test").toBe("test");
        return expect("another").toBe("another");
      });
      return runs(function() {
        return console.log("runs 2");
      });
    });
  });
});
