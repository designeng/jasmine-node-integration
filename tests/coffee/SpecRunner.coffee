# autoconcatenation with require.config - see app/coffee/requireConfig.coffee, Gruntfile

require.config

    baseUrl: "/app/js"

    packages: [
        "core"
    ]

    paths:
        # vendors 

        "jquery"                        : "vendors/jquery.min"
        "jquery.ScrollTo"               : "vendors/jquery-scrollto"
        "jquery.maskedinput"            : "vendors/jquery.maskedinput"
        "jquery.placeholder"            : "vendors/jquery.placeholder"
        "underscore"                    : "vendors/underscore"
        "_.str"                         : "vendors/underscore.string"
        "moment"                        : "vendors/moment"
        "backbone"                      : "vendors/backbone"
        "backbone.eventbinder"          : "vendors/backbone.eventbinder"
        "backbone.babysitter"           : "vendors/backbone.babysitter"
        "marionette"                    : "vendors/backbone.marionette"
        "backbone.wreqr"                : "vendors/backbone.wreqr"
        "modelbinder"                   : "vendors/Backbone.ModelBinder"
        "backbone.validation"           : "vendors/backbone.validation"
        "localstorage"                  : "vendors/backbone.localStorage"
        "Handlebars"                    : "vendors/handlebars"
        "flat"                          : "vendors/flat"
        "text"                          : "vendors/requirejs-text/text"
        "hbs"                           : "vendors/hbs"
        "tpl"                           : "vendors/tpl"
        "templates"                     : "../templates"
        "handlebarsHelpers"             : "helpers/handlebarsHelpers"
        "i18n"                          : "vendors/i18n"
        "msgs"                          : "vendors/msgs/msgs"

        "superagent"                    : "vendors/superagent"
        
        "bacon"                         : "vendors/Bacon"
        "eventstreams"                  : "vendors/backbone.eventstreams"

        # when with extentions
        "when"                          : "vendors/when/when"
        "function"                      : "vendors/when/function"
        "callbacks"                     : "vendors/when/callbacks"

        # meld with extentions
        "meld"                          : "vendors/meld"
        "trace"                         : "vendors/aspect/trace"

        # core

        "appinstance"   : "core/app"
        "mediator"      : "core/mediator"
        "appbootstrap"  : "core/appbootstrap"
        "vent"          : "core/vent"
        "overridden"    : "core/overridden"
        "extended"      : "core/extended"

        # registrators

        "regionModuleRegistrator"       :   "core/modules/page/registrator/regionModuleRegistrator"
        "moduleHash"                    :   "core/modules/page/registrator/moduleHash"

        # route processor

        "routeProcessor": "core/modules/root/routeprocessor/index"
        "routemap"      : "routeMap"


        # root modules

        "rootModule"    : "core/modules/root/rootModule"
        "rootController": "core/modules/root/rootController"
        "rootRouter"    : "core/modules/root/rootRouter"

        # page module

        "pageModule"    : "core/modules/page/pageModule"
        "pageController": "core/modules/page/pageController"
        "pageLayout"    : "core/modules/page/pageLayout"

        # base

        "baseViewObject"        : "core/base/object/baseViewObject"
        "baseLayoutObject"      : "core/base/object/baseLayoutObject"
        "baseControllerObject"  : "core/base/object/baseControllerObject"

        "baseRouter"            : "core/base/baseRouter"
        "baseModule"            : "core/base/baseModule"
        "baseLayout"            : "core/base/baseLayout"
        "baseComponent"         : "core/base/component/baseComponent"
        "baseControlWrapper"    : "core/base/baseControlWrapper"
        "baseInput"             : "core/base/baseInput"
        "baseActiveKey"         : "core/base/baseActiveKey"
        "baseControl"           : "core/base/baseControl"

        "baseBlockController"   : "core/base/baseBlockController"       


        # ioc

        "resolver"                  : "core/ioc/resolver"

        # services

        "globalEvents"              : "core/services/events/globalEvents"
        "controlContainerService"   : "core/services/controls/controlContainer"
        "renderingService"          : "core/services/controls/renderingService"

        "getLocale"                 : "core/utils/config/getCurrentLocale"

        # header module assets

        "headerLayout"              : "modules/header/headerLayout"
        "navigationCompositeView"   : "modules/header/navigation/navigationCompositeView"

        # content module

        "contentModule"             : "modules/content/contentModule"
        "contentController"         : "modules/content/contentController"

        # footerModule
        # "footerModule"             : "modules/footer/footerModule"
        # "footerController"         : "modules/footer/footerController"

        "footerInner"               : "modules/footerInner/footerInnerController"

        # debug module

        "debugModule" : "modules/debug/debugModule"

        # debugConsole module
        "debugConsoleModule" : "modules/debugConsole/debugConsoleModule"

        # controls entities

        "buttonModel"           : "controls/button/model/buttonModel"
        "inputTextModel"        : "controls/inputText/model/inputTextModel"
        "hintModel"             : "controls/hint/model/hintModel"
        "dropDownListModel"     : "controls/dropdownlist/model/dropDownListModel"
        "boxModel"              : "controls/box/model/boxModel"

        "comboboxListCollection": "controls/combobox/collection/comboboxListCollection"

        # controls

        "linkControl"           : "controls/link/linkControl"
        "textControl"           : "controls/text/textControl"
        "boxControl"            : "controls/box/boxControl"
        "buttonControl"         : "controls/button/buttonControl"
        "switchControl"         : "controls/switch/switchControl"
        "inputTextControl"      : "controls/inputText/inputTextControl"
        "comboboxControl"       : "controls/combobox/comboboxControl"
        "checkboxControl"       : "controls/checkbox/checkboxControl"
        "navigationBarControl"  : "controls/navigationbar/navigationBarControl"
        "hintControl"           : "controls/hint/hintControl"
        "dropDownListControl"   : "controls/dropdownlist/dropDownListControl"
        "flightPointControl"    : "controls/flightpoint/flightPointControl"
        "inputError"            : "controls/error/inputError"
        "tableControl"          : "controls/table/tableControl"
        "popupControl"          : "controls/popup/popupControl"
        "infoControl"           : "controls/info/infoControl"

        "preloader"             : "controls/preloader/preloaderControl"

        "navIcon"               : "controls/navIcon/navIconControl"
        "simpleTplControl"      : "controls/simpleTpl/simpleTplControl"
        "footerBar"             : "controls/footerBar/footerBarControl"
        "linkFooterNavControl"  : "controls/link/linkFooterNavControl"

        "flightSearchHistoryModule"     : "modules/flightSearchHistory/flightSearchHistoryModule"
        "flightSearchHistoryController" : "modules/flightSearchHistory/flightSearchHistoryController"
        "flightSearchHistoryBarControl" : "controls/flightSearchHistoryBar/flightSearchHistoryBarControl"
        "linkFavoriteSearchControl"     : "controls/link/linkFavoriteSearchControl"

        "flightSearchHeader"     : "modules/flightSearchHeader/flightSearchHeaderController"

        # filters
        "filterListButton"              : "controls/filter/filterListButton"
        "filterButton"                  : "controls/filter/filterButton"
        "filterBaseMediator"            : "controls/filter/mediator/base"
        # filter types
        "filterPopupSimply"             : "controls/filter/type/filterPopupSimply"
        "filterPopupSimplyContent"      : "modules/filterPopupSimplyContent/filterPopupSimplyContentController"
        "filterPopupList"               : "controls/filter/type/filterPopupList"
        "filterPopupListContent"        : "modules/filterPopupListContent/filterPopupListContentController"


        "header"                      : "modules/header/headerController"
        "flightStats"                 : "modules/flightStats/flightStatsController"
        "flightStatsResult"           : "modules/flightStatsResult/flightStatsResultController"
        "flightSearchHistory"         : "modules/flightSearchHistory/flightSearchHistoryController"

        "footer"                      : "modules/footer/footerController"

        "content"                     : "modules/content/contentController"
        "popupDev"                    : "modules/popupDev/popupDevController"
        "popupDevContent"             : "modules/popupDevContent/popupDevContentController"
        "sortedTableFilter"           : "modules/sortedTableFilter/sortedTableFilterController"
        "sortedTableFilterContent"    : "modules/sortedTableFilterContent/sortedTableFilterContentController"

        "sortedTable"                 : "modules/sortedTable/sortedTableController"
        
        "debug"                       : "modules/debug/debugController"
        "specReport"                  : "modules/specReport/specReportController"

    shim:
        marionette: ["backbone"]
        handlebarsHelpers: ["Handlebars"]
        "_.str":
            deps: ["underscore"]
        Handlebars:
            exports: "Handlebars"
        backbone:
            deps: ["underscore", "jquery"]
            exports: "Backbone"
        "eventstreams":
            deps: ["backbone", "bacon"]
        "modelbinder":
            deps: ["backbone"]
        "backbone.validation":
            deps: ["backbone"]
        "backbone.wreqr":
            deps: ["backbone"]
        "backbone.babysitter":
            deps: ["backbone"]
        "jquery.ScrollTo":
            deps: ['jquery']
            exports: "$.fn.ScrollTo"
        "jquery.maskedinput":
            deps: ['jquery']
        "jquery.placeholder":
            deps: ['jquery']
        "flat":
            exports: "flat"

    hbs:
        templateExtension: "html"
        disableI18n: true

    locale: "ru"



# and add to paths jquery.simulate
requirejs.s.contexts._.config["paths"]["jquery.simulate"] = "/tests/js/lib/jquery.simulate"
#index.js - list with runing specs
require [
    "jquery"
    "underscore"
    "when"
    "js/SpecIndex.js"
    "/tests/js/common/beforeEach.js"
    "/tests/js/common/afterEach.js"
], ($, _, WhenP, index) ->

    jasmineEnv = jasmine.getEnv()
    htmlReporter = new jasmine.HtmlReporter()
    jasmineEnv.addReporter htmlReporter
    jasmineEnv.specFilter = (spec) ->
        htmlReporter.specFilter spec

    pathToSpec = "/tests/js/spec/"
    extention = ".js"
    specs = _.map(index.specs, (spec) ->
                    return spec = pathToSpec + spec + extention
                )

    $ ->
        jasmine.getFixtures().fixturesPath = "/tests/fixtures"

        # hack - globals
        window.WhenP = WhenP

        require [
            "js/common/jasmine-given.js"
            "js/lib/jasmine.async.js"
        ], ->
            require specs, ->
                jasmineEnv.execute()

        

