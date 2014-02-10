define(["when", "PromisesSrc"], function(WhenP, PromisesSrc) {
  var TestTest, testInstanse;
  TestTest = (function() {
    function TestTest() {
      describe("Apple", function() {
        beforeEach(function() {
          console.log("beforeEach");
          return this.prom = new PromisesSrc();
        });
        afterEach(function() {
          console.log("afterEach");
          return delete this.prom;
        });
        it("should", function() {
          console.log(this);
          return expect(this.prom).property("one");
        });
        console.log("WITH", this);
      });
    }

    return TestTest;

  })();
  testInstanse = new TestTest();
  console.log(testInstanse);
  return testInstanse;
});
