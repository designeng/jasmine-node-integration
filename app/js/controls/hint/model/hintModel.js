(function() {
  define(["backbone"], function(Backbone) {
    var HintModel;
    return HintModel = Backbone.Model.extend({
      defaults: {
        className: "hintControl",
        width: 600,
        height: 50,
        bgColor: "red"
      }
    });
  });

}).call(this);
