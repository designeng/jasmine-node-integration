define(["backbone", "marionette"], function(Backbone, Marionette) {
  var declaration;
  return declaration = {
    componentItems: [
      {
        controlType: "infoControl",
        controlModel: new Backbone.Model({
          cases: [
            {
              flightPointNotFound: "one"
            }, {
              flightsNotFoundGotoSchedule: "two"
            }, {
              test: "loc_Flight"
            }, {
              support: "loc_SupportService"
            }
          ]
        })
      }
    ]
  };
});
