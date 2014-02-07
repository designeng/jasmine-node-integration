(function() {
  define(["marionette"], function(Marionette) {
    var BaseLayout;
    return BaseLayout = Marionette.Layout.extend({
      initialize: function(options) {
        return console.log("INIT");
      }
    });
  });

}).call(this);
