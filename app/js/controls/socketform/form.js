define(["marionette", "sockjs", "hbs!templates/test/form"], function(Marionette, SockJS, formTpl) {
  var FormSocket;
  FormSocket = Marionette.Layout.extend({
    template: formTpl,
    events: {
      "click span.button": "onClick"
    },
    initialize: function(options) {
      var _this = this;
      _.bindAll(this, "print");
      this.sockjs_url = 'http://localhost:9123/echo';
      this.sockjs = new SockJS(this.sockjs_url);
      this.sockjs.onopen = function() {
        return _this.print("[*] open", _this.sockjs.protocol);
      };
      this.sockjs.onmessage = function(e) {
        return _this.print("[.] message", e.data);
      };
      return this.sockjs.onclose = function() {
        return _this.print("[*] close");
      };
    },
    onRender: function() {
      this.$el.find("#first input").focus();
      this.div = this.$el.find("#first div");
      this.inp = this.$el.find("#first input");
      this.form = this.$el.find("#first form");
      return this.button = this.$el.find("span.button");
    },
    onClick: function() {
      console.log("----------------", this.sockjs);
      console.log("@inp.val()", this.inp.val());
      this.print("[ ] sending", this.inp.val());
      this.sockjs.send(this.inp.val());
      return this.inp.val("");
    },
    print: function(m, p) {
      p = (p === "undefined" ? "" : JSON.stringify(p));
      this.div.append($("<code>").text(m + " " + p));
      this.div.append($("<br>"));
      return this.div.scrollTop(this.div.scrollTop() + 10000);
    }
  });
  return FormSocket;
});
