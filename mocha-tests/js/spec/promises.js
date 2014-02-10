var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["when", "marionette", "PromisesSrc", "DeffSrc"], function(WhenP, Marionette, PromisesSrc, DeffSrc) {
  var TestTest, testInstanse, _ref;
  TestTest = (function(_super) {
    __extends(TestTest, _super);

    function TestTest() {
      _ref = TestTest.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TestTest.prototype.initialize = function() {
      return this.triggerMethod("init");
    };

    TestTest.prototype.onInit = function() {
      return describe("Apple", function() {
        this.timeout(5000);
        When(function(done) {
          var _this = this;
          this.prom = new DeffSrc();
          this.result = void 0;
          return WhenP(this.prom).then(function(res) {
            console.log("RES::::::", res);
            _this.result = res;
            return done();
          }, function(err) {
            console.log("ERR", err);
            return done();
          });
        });
        Then(function() {
          return expect(this.result).to.be.a('object');
        });
        return And(function() {
          return expect(this.result).property("one");
        });
      });
    };

    return TestTest;

  })(Marionette.Controller);
  testInstanse = new TestTest();
  return testInstanse;
});
