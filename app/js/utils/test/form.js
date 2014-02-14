define(["marionette", "sockjs", "hbs!templates/test/form"], function(Marionette, SockJS, formTpl) {
  var FormSocket;
  FormSocket = Marionette.Layout.extend({
    template: formTpl,
    initialize: function(options) {
      _.bindAll(this, "print");
      this.sockjs_url = 'http://localhost:9123/echo';
      return this.sockjs = new SockJS(this.sockjs_url);
    },
    onRender: function() {
      return this.$el.find("#first input").focus();
    }
  });
  return FormSocket;
});
