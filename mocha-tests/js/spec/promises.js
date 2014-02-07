define(["when", "pageModule", "PromisesSrc"], function(WhenP, PageModule, Promises) {
  return describe("Apple", function() {
    beforeEach(function() {
      this.promises = new Promises();
      return console.log("@promises", this.promises);
    });
    afterEach(function() {
      return delete this.promises;
    });
    return it("should", function() {
      return expect(this.promises).property("_message");
    });
  });
});
