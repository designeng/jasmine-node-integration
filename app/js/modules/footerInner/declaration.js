(function() {
  define(["hbs!templates/modules/footer/siteInfoTpl", "hbs!templates/modules/footer/companyInfoTpl"], function(SiteInfoTpl, CompanyInfoTpl) {
    var cardNavCollection, cardNavModel, companyInfoModel, contactHelpModel, contactHelpNavCollection, contactNavItemCollection, contactNavModel, declaration, footerNavItemCollection, footerNavModel, paymentNavCollection, paymentNavModel;
    footerNavItemCollection = new Backbone.Collection([
      {
        controlType: "linkControl",
        text: "Новости",
        url: "!/flight-stats"
      }, {
        controlType: "linkControl",
        text: "Партнерам",
        url: "!/schedule"
      }, {
        controlType: "linkControl",
        text: "О проекте",
        url: "!/additional-services"
      }, {
        controlType: "linkControl",
        text: "Справочники",
        url: "!/additional-services"
      }, {
        controlType: "linkControl",
        text: "Контакты",
        url: "!/additional-services"
      }
    ]);
    footerNavModel = new Backbone.Model({
      items: footerNavItemCollection,
      className: "footerSiteNav"
    });
    paymentNavCollection = new Backbone.Collection([
      {
        controlType: "linkControl",
        className: 'mPayCard',
        text: "Банковской картой",
        url: "/ru/help/payment-and-delivery/#payment-card"
      }, {
        controlType: "linkControl",
        className: 'mPayEuroset',
        text: "В офисах Евросети",
        url: "/ru/help/payment-and-delivery/#payment-euroset"
      }, {
        controlType: "linkControl",
        className: 'mPayYandex',
        text: "Яндекс.Деньгами",
        url: "http://www.linkedin.com/company/agent.ru"
      }, {
        controlType: "linkControl",
        className: 'mPayWebmoney',
        text: "С помощью WebMoney",
        url: "/ru/help/payment-and-delivery/#payment-webmoney"
      }, {
        controlType: "linkControl",
        className: 'mPayQiwi',
        text: "С помощью QIWI Кошелька",
        url: "/ru/help/payment-and-delivery/#payment-qiwi"
      }, {
        controlType: "linkControl",
        className: 'mPayAmEx',
        text: "Картой American Express",
        url: "/ru/help/payment-and-delivery/#payment-card"
      }
    ]);
    paymentNavModel = new Backbone.Model({
      items: paymentNavCollection,
      className: "footerPayment"
    });
    cardNavCollection = new Backbone.Collection([
      {
        controlType: "linkControl",
        text: "Verified by Visa",
        icon: "https://www.agent.ru/media/img/pictures/visa.gif",
        url: "/ru/visahelp/"
      }, {
        controlType: "linkControl",
        text: "Mastercard® SecureCode®",
        icon: 'https://www.agent.ru/media/img/pictures/mastercard.gif',
        url: "http://www.mastercardbusiness.com/mcbiz/index.jsp?template=/orphans&content=securecodepopup"
      }
    ]);
    cardNavModel = new Backbone.Model({
      items: cardNavCollection,
      className: "footerCard"
    });
    companyInfoModel = new Backbone.Model({
      className: "footerCompanyInfo inner",
      tpl: CompanyInfoTpl
    });
    contactHelpNavCollection = new Backbone.Collection([
      {
        controlType: "linkControl",
        url: "!/#",
        text: "Как забронировать?"
      }, {
        controlType: "linkControl",
        url: "!/#",
        text: "Оплата билета"
      }, {
        controlType: "linkControl",
        url: "!/#",
        text: "Получение и использование билета"
      }, {
        controlType: "linkControl",
        url: "!/#",
        text: "Возврат билета"
      }, {
        controlType: "linkControl",
        url: "!/#",
        text: "Обмен билета"
      }, {
        controlType: "linkControl",
        url: "!/#",
        text: "Документы для бухгалтерии"
      }, {
        controlType: "linkControl",
        url: "!/#",
        text: "Вопросы и ответы"
      }, {
        controlType: "linkControl",
        url: "!/#",
        text: "Законы и правила"
      }
    ]);
    contactHelpModel = new Backbone.Model({
      items: contactHelpNavCollection,
      className: "footerContactHelp",
      supportText: "Служба поддержки",
      workTimeText: "Работает круглосуточно"
    });
    contactNavItemCollection = new Backbone.Collection([
      {
        controlType: "linkControl",
        text: "Позвонить с компьютера",
        url: "!/flight-stats"
      }, {
        controlType: "linkControl",
        text: "Написать письмо",
        url: "!/schedule",
        className: "mEmail"
      }, {
        controlType: "linkFooterNavControl",
        className: "mHelp",
        text: "Помощь",
        icon: '/static/blocks/footerContactBar/question.jpg'
      }
    ]);
    contactNavModel = new Backbone.Model({
      items: contactNavItemCollection,
      phones: ["+7 495 797-4-797", "8 800 50-50-797"],
      className: "footerContactBar",
      help: contactHelpModel
    });
    return declaration = {
      componentItems: [
        {
          controlType: "navigationBarControl",
          controlModel: footerNavModel
        }, {
          controlType: "simpleTplControl",
          controlModel: companyInfoModel
        }, {
          controlType: "navIcon",
          controlModel: paymentNavModel
        }, {
          controlType: "navIcon",
          controlModel: cardNavModel
        }, {
          controlType: "footerBar",
          controlModel: contactNavModel
        }
      ]
    };
  });

}).call(this);
