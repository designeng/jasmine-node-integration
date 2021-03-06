define(["hbs!templates/modules/footer/siteInfoTpl", "hbs!templates/modules/footer/companyInfoTpl", "localstorage"], function(SiteInfoTpl, CompanyInfoTpl) {
  var DictionaryModel, FlightItemCollection, FlightItemModel, SearchesCollection, SearchesModel, declaration, dictionaryModel, favoriteModel, flightItemCollection, flightSearchHistoryModel, referenceData, responce, searchesCollection;
  if (!localStorage.getItem('references')) {
    referenceData = {
      "COUNTRY": {
        "1": {
          "id": "1",
          "nameRu": "Роccия",
          "nameEn": "Russian Federation",
          "codeIata": "RU",
          "codeSirena": "РФ"
        },
        "21": {
          "id": "21",
          "nameRu": "Германия",
          "nameEn": "Germany",
          "codeIata": "DE",
          "codeSirena": "ДЕ"
        },
        "22": {
          "id": "22",
          "nameRu": "Великобритания",
          "nameEn": "United Kingdom",
          "codeIata": "GB",
          "codeSirena": "ГБ"
        },
        "23": {
          "id": "23",
          "nameRu": "Китай",
          "nameEn": "China",
          "codeIata": "CN",
          "codeSirena": "ЦН"
        },
        "41": {
          "id": "41",
          "nameRu": "Азербайджан",
          "nameEn": "Azerbaijan",
          "codeIata": "AZ",
          "codeSirena": "АЗ"
        },
        "62": {
          "id": "62",
          "nameRu": "Израиль",
          "nameEn": "Israel",
          "codeIata": "IL",
          "codeSirena": "ИЛ"
        },
        "65": {
          "id": "65",
          "nameRu": "Украина",
          "nameEn": "Ukraine",
          "codeIata": "UA",
          "codeSirena": "УА"
        },
        "72": {
          "id": "72",
          "nameRu": "Молдова",
          "nameEn": "Moldova",
          "codeIata": "MD",
          "codeSirena": "МД"
        },
        "81": {
          "id": "81",
          "nameRu": "Турция",
          "nameEn": "Turkey",
          "codeIata": "TR",
          "codeSirena": "ТР"
        },
        "1801": {
          "id": "1801",
          "nameRu": "Алжир",
          "nameEn": "Algeria",
          "codeIata": "DZ",
          "codeSirena": "ДЗ"
        },
        "1804": {
          "id": "1804",
          "nameRu": "Австралия",
          "nameEn": "Australia",
          "codeIata": "AU",
          "codeSirena": "АУ"
        },
        "1815": {
          "id": "1815",
          "nameRu": "Исландия",
          "nameEn": "Iceland",
          "codeIata": "IS",
          "codeSirena": "ИС"
        },
        "1822": {
          "id": "1822",
          "nameRu": "Канада",
          "nameEn": "Canada",
          "codeIata": "CA",
          "codeSirena": "CA"
        },
        "1827": {
          "id": "1827",
          "nameRu": "Колумбия",
          "nameEn": "Colombia",
          "codeIata": "CO",
          "codeSirena": "CO"
        },
        "1830": {
          "id": "1830",
          "nameRu": "Куба",
          "nameEn": "Cuba",
          "codeIata": "CU",
          "codeSirena": "ЦЮ"
        },
        "1832": {
          "id": "1832",
          "nameRu": "Чешская Республика",
          "nameEn": "Czech Republic",
          "codeIata": "CZ",
          "codeSirena": "ЦЗ"
        },
        "1833": {
          "id": "1833",
          "nameRu": "Дания",
          "nameEn": "Denmark",
          "codeIata": "DK",
          "codeSirena": "ДК"
        },
        "1835": {
          "id": "1835",
          "nameRu": "Доминиканская Республика",
          "nameEn": "Dominican Republic",
          "codeIata": "DO",
          "codeSirena": "ДО"
        },
        "1838": {
          "id": "1838",
          "nameRu": "Египет",
          "nameEn": "Egypt",
          "codeIata": "EG",
          "codeSirena": "ЕГ"
        },
        "1845": {
          "id": "1845",
          "nameRu": "Франция",
          "nameEn": "France",
          "codeIata": "FR",
          "codeSirena": "ФР"
        },
        "1850": {
          "id": "1850",
          "nameRu": "Греция",
          "nameEn": "Greece",
          "codeIata": "GR",
          "codeSirena": "ГЦ"
        },
        "1858": {
          "id": "1858",
          "nameRu": "Индия",
          "nameEn": "India",
          "codeIata": "IN",
          "codeSirena": "ИН"
        },
        "1859": {
          "id": "1859",
          "nameRu": "Индонезия",
          "nameEn": "Indonesia",
          "codeIata": "ID",
          "codeSirena": "ИД"
        },
        "1860": {
          "id": "1860",
          "nameRu": "Иран",
          "nameEn": "Iran",
          "codeIata": "IR",
          "codeSirena": "ИР"
        },
        "1861": {
          "id": "1861",
          "nameRu": "Ирак",
          "nameEn": "Iraq",
          "codeIata": "IQ",
          "codeSirena": "ИШ"
        },
        "1862": {
          "id": "1862",
          "nameRu": "Ирландия",
          "nameEn": "Ireland",
          "codeIata": "IE",
          "codeSirena": "ИЕ"
        },
        "1864": {
          "id": "1864",
          "nameRu": "Италия",
          "nameEn": "Italy",
          "codeIata": "IT",
          "codeSirena": "ИТ"
        },
        "1866": {
          "id": "1866",
          "nameRu": "Япония",
          "nameEn": "Japan",
          "codeIata": "JP",
          "codeSirena": "ЙП"
        },
        "1867": {
          "id": "1867",
          "nameRu": "Иордания",
          "nameEn": "Jordan",
          "codeIata": "JO",
          "codeSirena": "ЙО"
        },
        "1868": {
          "id": "1868",
          "nameRu": "Кения",
          "nameEn": "Kenya",
          "codeIata": "KE",
          "codeSirena": "KE"
        },
        "1869": {
          "id": "1869",
          "nameRu": "Республика Корея",
          "nameEn": "Republic of Korea",
          "codeIata": "KR",
          "codeSirena": "КП"
        },
        "1873": {
          "id": "1873",
          "nameRu": "Ливан",
          "nameEn": "Lebanon",
          "codeIata": "LB",
          "codeSirena": "LB"
        },
        "1879": {
          "id": "1879",
          "nameRu": "Малайзия",
          "nameEn": "Malaysia",
          "codeIata": "MY",
          "codeSirena": "MY"
        },
        "1887": {
          "id": "1887",
          "nameRu": "Монголия",
          "nameEn": "Mongolia",
          "codeIata": "MN",
          "codeSirena": "МН"
        },
        "1888": {
          "id": "1888",
          "nameRu": "Марокко",
          "nameEn": "Morocco",
          "codeIata": "MA",
          "codeSirena": "МА"
        },
        "1898": {
          "id": "1898",
          "nameRu": "Норвегия",
          "nameEn": "Norway",
          "codeIata": "NO",
          "codeSirena": "НО"
        },
        "1904": {
          "id": "1904",
          "nameRu": "Перу",
          "nameEn": "Peru",
          "codeIata": "PE",
          "codeSirena": "PE"
        },
        "1905": {
          "id": "1905",
          "nameRu": "Филиппины",
          "nameEn": "Philippines",
          "codeIata": "PH",
          "codeSirena": "PH"
        },
        "1906": {
          "id": "1906",
          "nameRu": "Польша",
          "nameEn": "Poland",
          "codeIata": "PL",
          "codeSirena": "ПЛ"
        },
        "1913": {
          "id": "1913",
          "nameRu": "Саудовская Аравия",
          "nameEn": "Saudi Arabia",
          "codeIata": "SA",
          "codeSirena": "СП"
        },
        "1919": {
          "id": "1919",
          "nameRu": "Южно-Африканская Республика",
          "nameEn": "Republic of South Africa",
          "codeIata": "ZA",
          "codeSirena": "ЗА"
        },
        "1920": {
          "id": "1920",
          "nameRu": "Испания",
          "nameEn": "Spain and Canary Islands",
          "codeIata": "ES",
          "codeSirena": "ЕК"
        },
        "1922": {
          "id": "1922",
          "nameRu": "Судан",
          "nameEn": "Sudan",
          "codeIata": "SD",
          "codeSirena": "СД"
        },
        "1925": {
          "id": "1925",
          "nameRu": "Швеция",
          "nameEn": "Sweden",
          "codeIata": "SE",
          "codeSirena": "СЕ"
        },
        "1927": {
          "id": "1927",
          "nameRu": "Сирия",
          "nameEn": "Syrian Arab Republic",
          "codeIata": "SY",
          "codeSirena": "СЯ"
        },
        "1930": {
          "id": "1930",
          "nameRu": "Тайланд",
          "nameEn": "Thailand",
          "codeIata": "TH",
          "codeSirena": "TH"
        },
        "1933": {
          "id": "1933",
          "nameRu": "Тунис",
          "nameEn": "Tunisia",
          "codeIata": "TN",
          "codeSirena": "ТУ"
        },
        "1936": {
          "id": "1936",
          "nameRu": "Объединённые Арабские Эмираты",
          "nameEn": "United Arab Emirates",
          "codeIata": "AE",
          "codeSirena": "АЕ"
        },
        "1937": {
          "id": "1937",
          "nameRu": "США",
          "nameEn": "United States",
          "codeIata": "US",
          "codeSirena": "ЮС"
        },
        "1990": {
          "id": "1990",
          "nameRu": "Французская Полинезия",
          "nameEn": "French Polynesia",
          "codeIata": "PF",
          "codeSirena": "ПФ"
        },
        "2071": {
          "id": "2071",
          "nameRu": "Нидерландские Антиллы",
          "nameEn": "Netherlands Antilles",
          "codeIata": "AN",
          "codeSirena": null
        },
        "2073": {
          "id": "2073",
          "nameRu": "Аргентина",
          "nameEn": "Argentina",
          "codeIata": "AR",
          "codeSirena": "АР"
        },
        "2076": {
          "id": "2076",
          "nameRu": "Босния и Герцеговина",
          "nameEn": "Bosnia and Herzegovina",
          "codeIata": "BA",
          "codeSirena": null
        },
        "2082": {
          "id": "2082",
          "nameRu": "Бенин",
          "nameEn": "Benin",
          "codeIata": "BJ",
          "codeSirena": "БЙ"
        },
        "2085": {
          "id": "2085",
          "nameRu": "Боливия",
          "nameEn": "Bolivia",
          "codeIata": "BO",
          "codeSirena": "БО"
        },
        "2086": {
          "id": "2086",
          "nameRu": "Бразилия",
          "nameEn": "Brazil",
          "codeIata": "BR",
          "codeSirena": "БР"
        },
        "2090": {
          "id": "2090",
          "nameRu": "Белиз",
          "nameEn": "Belize",
          "codeIata": "BZ",
          "codeSirena": "БЗ"
        },
        "2092": {
          "id": "2092",
          "nameRu": "Демократическая Республика Конго",
          "nameEn": "Democratic Republic of Congo",
          "codeIata": "CD",
          "codeSirena": "ЦД"
        },
        "2093": {
          "id": "2093",
          "nameRu": "Центральноафриканская Республика",
          "nameEn": "Central African Republic",
          "codeIata": "CF",
          "codeSirena": "ЦФ"
        },
        "2094": {
          "id": "2094",
          "nameRu": "Конго",
          "nameEn": "Congo",
          "codeIata": "CG",
          "codeSirena": "ЦГ"
        },
        "2097": {
          "id": "2097",
          "nameRu": "Чили",
          "nameEn": "Chile",
          "codeIata": "CL",
          "codeSirena": "ЦЛ"
        },
        "2098": {
          "id": "2098",
          "nameRu": "Камерун",
          "nameEn": "Cameroon",
          "codeIata": "CM",
          "codeSirena": "ЦМ"
        },
        "2100": {
          "id": "2100",
          "nameRu": "Кабо-Верде",
          "nameEn": "Cape Verde",
          "codeIata": "CV",
          "codeSirena": "ЦЖ"
        },
        "2102": {
          "id": "2102",
          "nameRu": "Джибути",
          "nameEn": "Djibouti",
          "codeIata": "DJ",
          "codeSirena": "ДЙ"
        },
        "2106": {
          "id": "2106",
          "nameRu": "Эфиопия",
          "nameEn": "Ethiopia",
          "codeIata": "ET",
          "codeSirena": "ЕТ"
        },
        "2109": {
          "id": "2109",
          "nameRu": "Микронезия",
          "nameEn": "Micronesia",
          "codeIata": "FM",
          "codeSirena": "ФМ"
        },
        "2120": {
          "id": "2120",
          "nameRu": "Гватемала",
          "nameEn": "Guatemala",
          "codeIata": "GT",
          "codeSirena": "ГТ"
        },
        "2125": {
          "id": "2125",
          "nameRu": "Гондурас",
          "nameEn": "Honduras",
          "codeIata": "HN",
          "codeSirena": "ХН"
        },
        "2129": {
          "id": "2129",
          "nameRu": "Кирибати",
          "nameEn": "Kiribati",
          "codeIata": "KI",
          "codeSirena": "КИ"
        },
        "2130": {
          "id": "2130",
          "nameRu": "Коморы",
          "nameEn": "Comoros",
          "codeIata": "KM",
          "codeSirena": "КМ"
        },
        "2136": {
          "id": "2136",
          "nameRu": "Лесото",
          "nameEn": "Lesotho",
          "codeIata": "LS",
          "codeSirena": null
        },
        "2138": {
          "id": "2138",
          "nameRu": "Мадагаскар",
          "nameEn": "Madagascar",
          "codeIata": "MG",
          "codeSirena": "МЭ"
        },
        "2139": {
          "id": "2139",
          "nameRu": "Маршалловы Острова",
          "nameEn": "Marshall Islands",
          "codeIata": "MH",
          "codeSirena": null
        },
        "2140": {
          "id": "2140",
          "nameRu": "Мали",
          "nameEn": "Mali",
          "codeIata": "ML",
          "codeSirena": "МЛ"
        },
        "2144": {
          "id": "2144",
          "nameRu": "Мавритания",
          "nameEn": "Mauritania",
          "codeIata": "MR",
          "codeSirena": "МЯ"
        },
        "2147": {
          "id": "2147",
          "nameRu": "Мексика",
          "nameEn": "Mexico",
          "codeIata": "MX",
          "codeSirena": "МХ"
        },
        "2148": {
          "id": "2148",
          "nameRu": "Мозамбик",
          "nameEn": "Mozambique",
          "codeIata": "MZ",
          "codeSirena": "МЗ"
        },
        "2150": {
          "id": "2150",
          "nameRu": "Новая Каледония",
          "nameEn": "New Caledonia",
          "codeIata": "NC",
          "codeSirena": "НЦ"
        },
        "2151": {
          "id": "2151",
          "nameRu": "Нигер",
          "nameEn": "Niger",
          "codeIata": "NE",
          "codeSirena": "НЕ"
        },
        "2158": {
          "id": "2158",
          "nameRu": "Новая Зеландия",
          "nameEn": "New Zealand",
          "codeIata": "NZ",
          "codeSirena": "НЗ"
        },
        "2159": {
          "id": "2159",
          "nameRu": "Панама",
          "nameEn": "Panama",
          "codeIata": "PA",
          "codeSirena": "ПА"
        },
        "2160": {
          "id": "2160",
          "nameRu": "Папуа Новая Гвинея",
          "nameEn": "Papua New Guinea",
          "codeIata": "PG",
          "codeSirena": "ПГ"
        },
        "2165": {
          "id": "2165",
          "nameRu": "Парагвай",
          "nameEn": "Paraguay",
          "codeIata": "PY",
          "codeSirena": "ПЫ"
        },
        "2168": {
          "id": "2168",
          "nameRu": "Соломоновы Острова",
          "nameEn": "Solomon Islands",
          "codeIata": "SB",
          "codeSirena": "СБ"
        },
        "2173": {
          "id": "2173",
          "nameRu": "Сомали",
          "nameEn": "Somalia",
          "codeIata": "SO",
          "codeSirena": "СЬ"
        },
        "2179": {
          "id": "2179",
          "nameRu": "Чад",
          "nameEn": "Chad",
          "codeIata": "TD",
          "codeSirena": "ТЯ"
        },
        "2181": {
          "id": "2181",
          "nameRu": "Тимор-Лесте",
          "nameEn": "Timor-Leste",
          "codeIata": "TL",
          "codeSirena": null
        },
        "2188": {
          "id": "2188",
          "nameRu": "Венесуэла",
          "nameEn": "Venezuela",
          "codeIata": "VE",
          "codeSirena": null
        },
        "2191": {
          "id": "2191",
          "nameRu": "Вануату",
          "nameEn": "Vanuatu",
          "codeIata": "VU",
          "codeSirena": null
        },
        "2193": {
          "id": "2193",
          "nameRu": "Самоа",
          "nameEn": "Samoa",
          "codeIata": "WS",
          "codeSirena": "ВС"
        }
      },
      "CITY": {
        "1": {
          "id": "1",
          "nameRu": "Москва",
          "nameEn": "Moscow",
          "codeSirena": "МОВ",
          "codeIata": "MOW",
          "country": {
            "id": "1",
            "type": "COUNTRY"
          }
        },
        "21": {
          "id": "21",
          "nameRu": "Санкт-Петербург",
          "nameEn": "St Petersburg",
          "codeSirena": "СПТ",
          "codeIata": "LED",
          "country": {
            "id": "1",
            "type": "COUNTRY"
          }
        },
        "797": {
          "id": "797",
          "nameRu": "Бельцы",
          "nameEn": "Beltsy",
          "codeSirena": "БЦЫ",
          "codeIata": "BYZ",
          "country": {
            "id": "72",
            "type": "COUNTRY"
          }
        },
        "853": {
          "id": "853",
          "nameRu": "Баку",
          "nameEn": "Baku",
          "codeSirena": "БАК",
          "codeIata": "BAK",
          "country": {
            "id": "41",
            "type": "COUNTRY"
          }
        },
        "1393": {
          "id": "1393",
          "nameRu": "Сочи",
          "nameEn": "Adler/Sochi",
          "codeSirena": "СОЧ",
          "codeIata": "AER",
          "country": {
            "id": "1",
            "type": "COUNTRY"
          }
        },
        "1558": {
          "id": "1558",
          "nameRu": "Николаев",
          "nameEn": "Nikolaev",
          "codeSirena": "НЛВ",
          "codeIata": "NLV",
          "country": {
            "id": "65",
            "type": "COUNTRY"
          }
        },
        "1559": {
          "id": "1559",
          "nameRu": "Николаевск-На-Амуре",
          "nameEn": "Nikolaevsk",
          "codeSirena": "НЛК",
          "codeIata": null,
          "country": {
            "id": "1",
            "type": "COUNTRY"
          }
        },
        "1704": {
          "id": "1704",
          "nameRu": "Афины",
          "nameEn": "Athens",
          "codeSirena": "АТХ",
          "codeIata": "ATH",
          "country": {
            "id": "1850",
            "type": "COUNTRY"
          }
        },
        "1707": {
          "id": "1707",
          "nameRu": "Бейрут",
          "nameEn": "Beirut",
          "codeSirena": "БЕУ",
          "codeIata": "BEY",
          "country": {
            "id": "1873",
            "type": "COUNTRY"
          }
        },
        "1717": {
          "id": "1717",
          "nameRu": "Гётеборг",
          "nameEn": "Gothenburg",
          "codeSirena": "GOT",
          "codeIata": "GOT",
          "country": {
            "id": "1925",
            "type": "COUNTRY"
          }
        },
        "1984": {
          "id": "1984",
          "nameRu": "Аликанте",
          "nameEn": "Alicante",
          "codeSirena": "АЛИ",
          "codeIata": "ALC",
          "country": {
            "id": "1920",
            "type": "COUNTRY"
          }
        },
        "1989": {
          "id": "1989",
          "nameRu": "Алеппо",
          "nameEn": "Aleppo",
          "codeSirena": "АЛП",
          "codeIata": "ALP",
          "country": {
            "id": "1927",
            "type": "COUNTRY"
          }
        },
        "2035": {
          "id": "2035",
          "nameRu": "Амман",
          "nameEn": "Amman",
          "codeSirena": "АМН",
          "codeIata": "AMM",
          "country": {
            "id": "1867",
            "type": "COUNTRY"
          }
        },
        "2642": {
          "id": "2642",
          "nameRu": "Агадир",
          "nameEn": "Agadir",
          "codeSirena": "AGA",
          "codeIata": "AGA",
          "country": {
            "id": "1888",
            "type": "COUNTRY"
          }
        },
        "2666": {
          "id": "2666",
          "nameRu": "Бергамо",
          "nameEn": "Bergamo",
          "codeSirena": "БГМ",
          "codeIata": "BGY",
          "country": {
            "id": "1864",
            "type": "COUNTRY"
          }
        },
        "2765": {
          "id": "2765",
          "nameRu": "Бусан",
          "nameEn": "Busan",
          "codeSirena": "ПУС",
          "codeIata": "PUS",
          "country": {
            "id": "1869",
            "type": "COUNTRY"
          }
        },
        "2800": {
          "id": "2800",
          "nameRu": "Абу-Даби",
          "nameEn": "Abu Dhabi",
          "codeSirena": "АУХ",
          "codeIata": "AUH",
          "country": {
            "id": "1936",
            "type": "COUNTRY"
          }
        },
        "2833": {
          "id": "2833",
          "nameRu": "Эр-Рияд",
          "nameEn": "Riyadh",
          "codeSirena": "РУХ",
          "codeIata": "RUH",
          "country": {
            "id": "1913",
            "type": "COUNTRY"
          }
        },
        "2865": {
          "id": "2865",
          "nameRu": "Болонья",
          "nameEn": "Bologna",
          "codeSirena": "БОЯ",
          "codeIata": "BLQ",
          "country": {
            "id": "1864",
            "type": "COUNTRY"
          }
        },
        "2876": {
          "id": "2876",
          "nameRu": "Брешия",
          "nameEn": "Brescia",
          "codeSirena": "VBS",
          "codeIata": "VBS",
          "country": {
            "id": "1864",
            "type": "COUNTRY"
          }
        },
        "2877": {
          "id": "2877",
          "nameRu": "Альмерия",
          "nameEn": "Almeria",
          "codeSirena": "LEI",
          "codeIata": "LEI",
          "country": {
            "id": "1920",
            "type": "COUNTRY"
          }
        },
        "2884": {
          "id": "2884",
          "nameRu": "Аомори",
          "nameEn": "Aomori",
          "codeSirena": "АОЙ",
          "codeIata": "AOJ",
          "country": {
            "id": "1866",
            "type": "COUNTRY"
          }
        },
        "2953": {
          "id": "2953",
          "nameRu": "Александрополис",
          "nameEn": "Alexandroupolis",
          "codeSirena": "AXD",
          "codeIata": "AXD",
          "country": {
            "id": "1850",
            "type": "COUNTRY"
          }
        },
        "2968": {
          "id": "2968",
          "nameRu": "Александрия",
          "nameEn": "Alexandria",
          "codeSirena": "ALY",
          "codeIata": "ALY",
          "country": {
            "id": "1838",
            "type": "COUNTRY"
          }
        },
        "3003": {
          "id": "3003",
          "nameRu": "Аррабери",
          "nameEn": "Arrabury",
          "codeSirena": "AAB",
          "codeIata": "AAB",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3029": {
          "id": "3029",
          "nameRu": "108 Майл Рэнч",
          "nameEn": "108 Mile Ranch",
          "codeSirena": null,
          "codeIata": "ZMH",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "3035": {
          "id": "3035",
          "nameRu": "Аалесунд",
          "nameEn": "Aalesund",
          "codeSirena": "AES",
          "codeIata": "AES",
          "country": {
            "id": "1898",
            "type": "COUNTRY"
          }
        },
        "3049": {
          "id": "3049",
          "nameRu": "Абишер",
          "nameEn": "Abecher",
          "codeSirena": null,
          "codeIata": "AEH",
          "country": {
            "id": "2179",
            "type": "COUNTRY"
          }
        },
        "3050": {
          "id": "3050",
          "nameRu": "Абемама",
          "nameEn": "Abemama Atoll",
          "codeSirena": null,
          "codeIata": "AEA",
          "country": {
            "id": "2129",
            "type": "COUNTRY"
          }
        },
        "3054": {
          "id": "3054",
          "nameRu": "Абердин",
          "nameEn": "Aberdeen",
          "codeSirena": null,
          "codeIata": "APG",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3059": {
          "id": "3059",
          "nameRu": "Абилин",
          "nameEn": "Abilene",
          "codeSirena": null,
          "codeIata": "ABI",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3066": {
          "id": "3066",
          "nameRu": "Абу-Муса",
          "nameEn": "Abu Musa",
          "codeSirena": null,
          "codeIata": "AEU",
          "country": {
            "id": "1860",
            "type": "COUNTRY"
          }
        },
        "3080": {
          "id": "3080",
          "nameRu": "Адана",
          "nameEn": "Adana",
          "codeSirena": null,
          "codeIata": "UAB",
          "country": {
            "id": "81",
            "type": "COUNTRY"
          }
        },
        "3081": {
          "id": "3081",
          "nameRu": "Адарайл",
          "nameEn": "Adareil",
          "codeSirena": null,
          "codeIata": "AEE",
          "country": {
            "id": "1922",
            "type": "COUNTRY"
          }
        },
        "3083": {
          "id": "3083",
          "nameRu": "Аддис-Абеба",
          "nameEn": "Addis Ababa",
          "codeSirena": "ADD",
          "codeIata": "ADD",
          "country": {
            "id": "2106",
            "type": "COUNTRY"
          }
        },
        "3084": {
          "id": "3084",
          "nameRu": "Аделаида",
          "nameEn": "Adelaide",
          "codeSirena": "ADL",
          "codeIata": "ADL",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3093": {
          "id": "3093",
          "nameRu": "Афутара",
          "nameEn": "Afutara",
          "codeSirena": null,
          "codeIata": "AFT",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3102": {
          "id": "3102",
          "nameRu": "Аггенейс",
          "nameEn": "Aggeneys",
          "codeSirena": null,
          "codeIata": "AGZ",
          "country": {
            "id": "1919",
            "type": "COUNTRY"
          }
        },
        "3112": {
          "id": "3112",
          "nameRu": "Агуаскальентс",
          "nameEn": "Aguascalientes",
          "codeSirena": null,
          "codeIata": "AGU",
          "country": {
            "id": "2147",
            "type": "COUNTRY"
          }
        },
        "3123": {
          "id": "3123",
          "nameRu": "Аилиганди",
          "nameEn": "Ailigandi",
          "codeSirena": null,
          "codeIata": "AIL",
          "country": {
            "id": "2159",
            "type": "COUNTRY"
          }
        },
        "3124": {
          "id": "3124",
          "nameRu": "Аилингапалап",
          "nameEn": "Ailinglapalap Island",
          "codeSirena": null,
          "codeIata": "AIP",
          "country": {
            "id": "2139",
            "type": "COUNTRY"
          }
        },
        "3132": {
          "id": "3132",
          "nameRu": "Айюн-Эль-Атрусс",
          "nameEn": "Aioun El Atrouss",
          "codeSirena": null,
          "codeIata": "AEO",
          "country": {
            "id": "2144",
            "type": "COUNTRY"
          }
        },
        "3159": {
          "id": "3159",
          "nameRu": "Акуливик",
          "nameEn": "Akulivik",
          "codeSirena": null,
          "codeIata": "AKV",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "3162": {
          "id": "3162",
          "nameRu": "Акурейри",
          "nameEn": "Akureyri",
          "codeSirena": null,
          "codeIata": "AEY",
          "country": {
            "id": "1815",
            "type": "COUNTRY"
          }
        },
        "3168": {
          "id": "3168",
          "nameRu": "Аль-Хосейма",
          "nameEn": "Al Hoceima",
          "codeSirena": null,
          "codeIata": "AHU",
          "country": {
            "id": "1888",
            "type": "COUNTRY"
          }
        },
        "3171": {
          "id": "3171",
          "nameRu": "Ал-Торах",
          "nameEn": "Al Thaurah",
          "codeSirena": null,
          "codeIata": "SOR",
          "country": {
            "id": "1927",
            "type": "COUNTRY"
          }
        },
        "3174": {
          "id": "3174",
          "nameRu": "Алах",
          "nameEn": "Alah",
          "codeSirena": null,
          "codeIata": "AAV",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "3178": {
          "id": "3178",
          "nameRu": "Аламогордо",
          "nameEn": "Alamogordo",
          "codeSirena": null,
          "codeIata": "ALM",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3179": {
          "id": "3179",
          "nameRu": "Аламос",
          "nameEn": "Alamos",
          "codeSirena": null,
          "codeIata": "XAL",
          "country": {
            "id": "2147",
            "type": "COUNTRY"
          }
        },
        "3180": {
          "id": "3180",
          "nameRu": "Аламоса",
          "nameEn": "Alamosa",
          "codeSirena": null,
          "codeIata": "ALS",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3189": {
          "id": "3189",
          "nameRu": "Альберт-Ли",
          "nameEn": "Albert Lea",
          "codeSirena": null,
          "codeIata": "AEL",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3201": {
          "id": "3201",
          "nameRu": "Алег",
          "nameEn": "Aleg",
          "codeSirena": null,
          "codeIata": "LEG",
          "country": {
            "id": "2144",
            "type": "COUNTRY"
          }
        },
        "3202": {
          "id": "3202",
          "nameRu": "Алегрете",
          "nameEn": "Alegrete",
          "codeSirena": null,
          "codeIata": "ALQ",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "3203": {
          "id": "3203",
          "nameRu": "Алекнаджик",
          "nameEn": "Aleknagik",
          "codeSirena": null,
          "codeIata": "WKK",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3205": {
          "id": "3205",
          "nameRu": "Алинива",
          "nameEn": "Aleneva",
          "codeSirena": null,
          "codeIata": "AED",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3206": {
          "id": "3206",
          "nameRu": "Аленкер",
          "nameEn": "Alenquer",
          "codeSirena": null,
          "codeIata": "ALT",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "3207": {
          "id": "3207",
          "nameRu": "Алёрт",
          "nameEn": "Alert",
          "codeSirena": null,
          "codeIata": "YLT",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "3208": {
          "id": "3208",
          "nameRu": "Алёрт-Бэй",
          "nameEn": "Alert Bay",
          "codeSirena": null,
          "codeIata": "YAL",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "3209": {
          "id": "3209",
          "nameRu": "Алерта",
          "nameEn": "Alerta",
          "codeSirena": null,
          "codeIata": "ALD",
          "country": {
            "id": "1904",
            "type": "COUNTRY"
          }
        },
        "3212": {
          "id": "3212",
          "nameRu": "Алекзандер-Бэй",
          "nameEn": "Alexander Bay",
          "codeSirena": null,
          "codeIata": "ALJ",
          "country": {
            "id": "1919",
            "type": "COUNTRY"
          }
        },
        "3213": {
          "id": "3213",
          "nameRu": "Александр-Сити",
          "nameEn": "Alexander City",
          "codeSirena": null,
          "codeIata": "ALX",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3214": {
          "id": "3214",
          "nameRu": "Александра",
          "nameEn": "Alexandra",
          "codeSirena": null,
          "codeIata": "ALR",
          "country": {
            "id": "2158",
            "type": "COUNTRY"
          }
        },
        "3215": {
          "id": "3215",
          "nameRu": "Александрия",
          "nameEn": "Alexandria",
          "codeSirena": null,
          "codeIata": "AEX",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3216": {
          "id": "3216",
          "nameRu": "Александрия",
          "nameEn": "Alexandria",
          "codeSirena": null,
          "codeIata": "AXN",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3217": {
          "id": "3217",
          "nameRu": "Александрия",
          "nameEn": "Alexandria",
          "codeSirena": null,
          "codeIata": "AXL",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3219": {
          "id": "3219",
          "nameRu": "Александрия-Бэй",
          "nameEn": "Alexandria Bay",
          "codeSirena": null,
          "codeIata": "AXB",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3222": {
          "id": "3222",
          "nameRu": "Альхесирас",
          "nameEn": "Algeciras",
          "codeSirena": null,
          "codeIata": "AEI",
          "country": {
            "id": "1920",
            "type": "COUNTRY"
          }
        },
        "3223": {
          "id": "3223",
          "nameRu": "Альгеро",
          "nameEn": "Alghero",
          "codeSirena": "AHO",
          "codeIata": "AHO",
          "country": {
            "id": "1864",
            "type": "COUNTRY"
          }
        },
        "3230": {
          "id": "3230",
          "nameRu": "Алисабьех",
          "nameEn": "Alisabieh",
          "codeSirena": null,
          "codeIata": "AII",
          "country": {
            "id": "2102",
            "type": "COUNTRY"
          }
        },
        "3231": {
          "id": "3231",
          "nameRu": "Алитак",
          "nameEn": "Alitak",
          "codeSirena": null,
          "codeIata": "ALZ",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3233": {
          "id": "3233",
          "nameRu": "Аллахабад",
          "nameEn": "Allahabad",
          "codeSirena": "IXD",
          "codeIata": "IXD",
          "country": {
            "id": "1858",
            "type": "COUNTRY"
          }
        },
        "3234": {
          "id": "3234",
          "nameRu": "Олакейкет",
          "nameEn": "Allakaket",
          "codeSirena": null,
          "codeIata": "AET",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3236": {
          "id": "3236",
          "nameRu": "Аллентаун",
          "nameEn": "Allentown",
          "codeSirena": null,
          "codeIata": "ABE",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3237": {
          "id": "3237",
          "nameRu": "Альянс",
          "nameEn": "Alliance",
          "codeSirena": null,
          "codeIata": "AIA",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3251": {
          "id": "3251",
          "nameRu": "Альфа",
          "nameEn": "Alpha",
          "codeSirena": null,
          "codeIata": "ABH",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3256": {
          "id": "3256",
          "nameRu": "Альта-Лейк",
          "nameEn": "Alta Lake",
          "codeSirena": null,
          "codeIata": "YAE",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "3257": {
          "id": "3257",
          "nameRu": "Алтай",
          "nameEn": "Altai",
          "codeSirena": null,
          "codeIata": "LTI",
          "country": {
            "id": "1887",
            "type": "COUNTRY"
          }
        },
        "3262": {
          "id": "3262",
          "nameRu": "Альто-Молокуе",
          "nameEn": "Alto Molocue",
          "codeSirena": "AME",
          "codeIata": "AME",
          "country": {
            "id": "2148",
            "type": "COUNTRY"
          }
        },
        "3263": {
          "id": "3263",
          "nameRu": "Альто-Палена",
          "nameEn": "Alto Palena",
          "codeSirena": null,
          "codeIata": "WAP",
          "country": {
            "id": "2097",
            "type": "COUNTRY"
          }
        },
        "3270": {
          "id": "3270",
          "nameRu": "Алула",
          "nameEn": "Alula",
          "codeSirena": null,
          "codeIata": "ALU",
          "country": {
            "id": "2173",
            "type": "COUNTRY"
          }
        },
        "3282": {
          "id": "3282",
          "nameRu": "Амата",
          "nameEn": "Amata",
          "codeSirena": null,
          "codeIata": "AMT",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3290": {
          "id": "3290",
          "nameRu": "Амблер",
          "nameEn": "Ambler",
          "codeSirena": null,
          "codeIata": "ABL",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3294": {
          "id": "3294",
          "nameRu": "Амбосели",
          "nameEn": "Amboseli",
          "codeSirena": null,
          "codeIata": "ASV",
          "country": {
            "id": "1868",
            "type": "COUNTRY"
          }
        },
        "3299": {
          "id": "3299",
          "nameRu": "Американ-Ривер",
          "nameEn": "American River",
          "codeSirena": null,
          "codeIata": "RCN",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3307": {
          "id": "3307",
          "nameRu": "Аммару",
          "nameEn": "Ammaroo",
          "codeSirena": null,
          "codeIata": "AMX",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3309": {
          "id": "3309",
          "nameRu": "Амук",
          "nameEn": "Amook",
          "codeSirena": null,
          "codeIata": "AOS",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3310": {
          "id": "3310",
          "nameRu": "Эймос",
          "nameEn": "Amos",
          "codeSirena": null,
          "codeIata": "YEY",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "3323": {
          "id": "3323",
          "nameRu": "Анаполис",
          "nameEn": "Anapolis",
          "codeSirena": null,
          "codeIata": "APS",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "3324": {
          "id": "3324",
          "nameRu": "Анкуд",
          "nameEn": "Ancud",
          "codeSirena": null,
          "codeIata": "ZUD",
          "country": {
            "id": "2097",
            "type": "COUNTRY"
          }
        },
        "3328": {
          "id": "3328",
          "nameRu": "Андамука",
          "nameEn": "Andamooka",
          "codeSirena": null,
          "codeIata": "ADO",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3350": {
          "id": "3350",
          "nameRu": "Ангоч",
          "nameEn": "Angoche",
          "codeSirena": null,
          "codeIata": "ANO",
          "country": {
            "id": "2148",
            "type": "COUNTRY"
          }
        },
        "3354": {
          "id": "3354",
          "nameRu": "Ангулем",
          "nameEn": "Angouleme",
          "codeSirena": null,
          "codeIata": "ANG",
          "country": {
            "id": "1845",
            "type": "COUNTRY"
          }
        },
        "3362": {
          "id": "3362",
          "nameRu": "Анджуан",
          "nameEn": "Anjouan",
          "codeSirena": null,
          "codeIata": "AJN",
          "country": {
            "id": "2130",
            "type": "COUNTRY"
          }
        },
        "3368": {
          "id": "3368",
          "nameRu": "Анкорефо",
          "nameEn": "Ankorefo",
          "codeSirena": null,
          "codeIata": "WOR",
          "country": {
            "id": "2138",
            "type": "COUNTRY"
          }
        },
        "3370": {
          "id": "3370",
          "nameRu": "Аннаба",
          "nameEn": "Annaba",
          "codeSirena": null,
          "codeIata": "AAE",
          "country": {
            "id": "1801",
            "type": "COUNTRY"
          }
        },
        "3373": {
          "id": "3373",
          "nameRu": "Аннаполис",
          "nameEn": "Annapolis",
          "codeSirena": null,
          "codeIata": "ANP",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3389": {
          "id": "3389",
          "nameRu": "Антик",
          "nameEn": "Antique",
          "codeSirena": null,
          "codeIata": "EUQ",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "3391": {
          "id": "3391",
          "nameRu": "Антофагаста",
          "nameEn": "Antofagasta",
          "codeSirena": null,
          "codeIata": "ANF",
          "country": {
            "id": "2097",
            "type": "COUNTRY"
          }
        },
        "3396": {
          "id": "3396",
          "nameRu": "Ануха-Айленд-Резорт",
          "nameEn": "Anuha Island Resort",
          "codeSirena": null,
          "codeIata": "ANH",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3403": {
          "id": "3403",
          "nameRu": "Апалапсили",
          "nameEn": "Apalapsili",
          "codeSirena": null,
          "codeIata": "AAS",
          "country": {
            "id": "1859",
            "type": "COUNTRY"
          }
        },
        "3409": {
          "id": "3409",
          "nameRu": "Апиа",
          "nameEn": "Apia",
          "codeSirena": "APW",
          "codeIata": "APW",
          "country": {
            "id": "2193",
            "type": "COUNTRY"
          }
        },
        "3411": {
          "id": "3411",
          "nameRu": "Аполо",
          "nameEn": "Apolo",
          "codeSirena": null,
          "codeIata": "APB",
          "country": {
            "id": "2085",
            "type": "COUNTRY"
          }
        },
        "3425": {
          "id": "3425",
          "nameRu": "Арамак",
          "nameEn": "Aramac",
          "codeSirena": null,
          "codeIata": "AXC",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3432": {
          "id": "3432",
          "nameRu": "Арар",
          "nameEn": "Arar",
          "codeSirena": null,
          "codeIata": "RAE",
          "country": {
            "id": "1913",
            "type": "COUNTRY"
          }
        },
        "3436": {
          "id": "3436",
          "nameRu": "Арарат",
          "nameEn": "Ararat",
          "codeSirena": null,
          "codeIata": "ARY",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3445": {
          "id": "3445",
          "nameRu": "Арболетас",
          "nameEn": "Arboletas",
          "codeSirena": null,
          "codeIata": "ARO",
          "country": {
            "id": "1827",
            "type": "COUNTRY"
          }
        },
        "3453": {
          "id": "3453",
          "nameRu": "Ардмор",
          "nameEn": "Ardmore",
          "codeSirena": null,
          "codeIata": "AMZ",
          "country": {
            "id": "2158",
            "type": "COUNTRY"
          }
        },
        "3454": {
          "id": "3454",
          "nameRu": "Ардмор",
          "nameEn": "Ardmore",
          "codeSirena": null,
          "codeIata": "ADM",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3460": {
          "id": "3460",
          "nameRu": "Аргил",
          "nameEn": "Argyle",
          "codeSirena": null,
          "codeIata": "GYL",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3461": {
          "id": "3461",
          "nameRu": "Аргайл-Даунс",
          "nameEn": "Argyle Downs",
          "codeSirena": null,
          "codeIata": "AGY",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3463": {
          "id": "3463",
          "nameRu": "Арика",
          "nameEn": "Arica",
          "codeSirena": null,
          "codeIata": "ARI",
          "country": {
            "id": "2097",
            "type": "COUNTRY"
          }
        },
        "3471": {
          "id": "3471",
          "nameRu": "Арлит",
          "nameEn": "Arlit",
          "codeSirena": null,
          "codeIata": "RLT",
          "country": {
            "id": "2151",
            "type": "COUNTRY"
          }
        },
        "3476": {
          "id": "3476",
          "nameRu": "Армидал",
          "nameEn": "Armidale",
          "codeSirena": null,
          "codeIata": "ARM",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3484": {
          "id": "3484",
          "nameRu": "Арона",
          "nameEn": "Arona",
          "codeSirena": null,
          "codeIata": "RNA",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3485": {
          "id": "3485",
          "nameRu": "Ароре",
          "nameEn": "Arorae Island",
          "codeSirena": null,
          "codeIata": "AIS",
          "country": {
            "id": "2129",
            "type": "COUNTRY"
          }
        },
        "3499": {
          "id": "3499",
          "nameRu": "Арвайхир",
          "nameEn": "Arvaikheer",
          "codeSirena": null,
          "codeIata": "AVK",
          "country": {
            "id": "1887",
            "type": "COUNTRY"
          }
        },
        "3507": {
          "id": "3507",
          "nameRu": "Асау",
          "nameEn": "Asau",
          "codeSirena": null,
          "codeIata": "AAU",
          "country": {
            "id": "2193",
            "type": "COUNTRY"
          }
        },
        "3510": {
          "id": "3510",
          "nameRu": "Асансьон",
          "nameEn": "Ascension",
          "codeSirena": null,
          "codeIata": "ASC",
          "country": {
            "id": "2085",
            "type": "COUNTRY"
          }
        },
        "3514": {
          "id": "3514",
          "nameRu": "Асеки",
          "nameEn": "Aseki",
          "codeSirena": null,
          "codeIata": "AEK",
          "country": {
            "id": "2160",
            "type": "COUNTRY"
          }
        },
        "3542": {
          "id": "3542",
          "nameRu": "Атар",
          "nameEn": "Atar",
          "codeSirena": null,
          "codeIata": "ATR",
          "country": {
            "id": "2144",
            "type": "COUNTRY"
          }
        },
        "3558": {
          "id": "3558",
          "nameRu": "Атоифи",
          "nameEn": "Atoifi",
          "codeSirena": null,
          "codeIata": "ATD",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3578": {
          "id": "3578",
          "nameRu": "Ауки",
          "nameEn": "Auki",
          "codeSirena": null,
          "codeIata": "AKS",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3587": {
          "id": "3587",
          "nameRu": "Аурукун-Мишн",
          "nameEn": "Aurukun Mission",
          "codeSirena": null,
          "codeIata": "AUU",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3602": {
          "id": "3602",
          "nameRu": "Аву-Аву",
          "nameEn": "Avu Avu",
          "codeSirena": null,
          "codeIata": "AVU",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3614": {
          "id": "3614",
          "nameRu": "Айерс-Рок",
          "nameEn": "Ayers Rock",
          "codeSirena": null,
          "codeIata": "AYQ",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3627": {
          "id": "3627",
          "nameRu": "Баколод",
          "nameEn": "Bacolod",
          "codeSirena": null,
          "codeIata": "BCD",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "3633": {
          "id": "3633",
          "nameRu": "Баду-Айленд",
          "nameEn": "Badu Island",
          "codeSirena": null,
          "codeIata": "BDD",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3636": {
          "id": "3636",
          "nameRu": "Баганга",
          "nameEn": "Baganga",
          "codeSirena": null,
          "codeIata": "BNQ",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "3642": {
          "id": "3642",
          "nameRu": "Баготвилл",
          "nameEn": "Bagotville",
          "codeSirena": null,
          "codeIata": "YBG",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "3643": {
          "id": "3643",
          "nameRu": "Багуйо",
          "nameEn": "Baguio",
          "codeSirena": null,
          "codeIata": "BAG",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "3647": {
          "id": "3647",
          "nameRu": "Байя-Анжелес",
          "nameEn": "Bahia Angeles",
          "codeSirena": null,
          "codeIata": "BHL",
          "country": {
            "id": "2147",
            "type": "COUNTRY"
          }
        },
        "3658": {
          "id": "3658",
          "nameRu": "Байдоа",
          "nameEn": "Baidoa",
          "codeSirena": null,
          "codeIata": "BIB",
          "country": {
            "id": "2173",
            "type": "COUNTRY"
          }
        },
        "3665": {
          "id": "3665",
          "nameRu": "Байзе",
          "nameEn": "Baise",
          "codeSirena": null,
          "codeIata": "AEB",
          "country": {
            "id": "23",
            "type": "COUNTRY"
          }
        },
        "3669": {
          "id": "3669",
          "nameRu": "Бахоне",
          "nameEn": "Bajone",
          "codeSirena": null,
          "codeIata": "BJN",
          "country": {
            "id": "2148",
            "type": "COUNTRY"
          }
        },
        "3678": {
          "id": "3678",
          "nameRu": "Бакума",
          "nameEn": "Bakouma",
          "codeSirena": null,
          "codeIata": "BMF",
          "country": {
            "id": "2093",
            "type": "COUNTRY"
          }
        },
        "3681": {
          "id": "3681",
          "nameRu": "Балала",
          "nameEn": "Balalae",
          "codeSirena": null,
          "codeIata": "BAS",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3685": {
          "id": "3685",
          "nameRu": "Балила",
          "nameEn": "Baleela",
          "codeSirena": null,
          "codeIata": "BJE",
          "country": {
            "id": "1922",
            "type": "COUNTRY"
          }
        },
        "3686": {
          "id": "3686",
          "nameRu": "Балер",
          "nameEn": "Baler",
          "codeSirena": null,
          "codeIata": "BQA",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "3687": {
          "id": "3687",
          "nameRu": "Балго-Хиллс",
          "nameEn": "Balgo Hills",
          "codeSirena": null,
          "codeIata": "BQW",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3689": {
          "id": "3689",
          "nameRu": "Бали",
          "nameEn": "Bali",
          "codeSirena": "BLC",
          "codeIata": "BLC",
          "country": {
            "id": "2098",
            "type": "COUNTRY"
          }
        },
        "3690": {
          "id": "3690",
          "nameRu": "Бали",
          "nameEn": "Bali",
          "codeSirena": "BAJ",
          "codeIata": "BAJ",
          "country": {
            "id": "2160",
            "type": "COUNTRY"
          }
        },
        "3691": {
          "id": "3691",
          "nameRu": "Баликесир",
          "nameEn": "Balikesir",
          "codeSirena": null,
          "codeIata": "BZI",
          "country": {
            "id": "81",
            "type": "COUNTRY"
          }
        },
        "3692": {
          "id": "3692",
          "nameRu": "Баликесир",
          "nameEn": "Balikesir",
          "codeSirena": null,
          "codeIata": "MQJ",
          "country": {
            "id": "81",
            "type": "COUNTRY"
          }
        },
        "3693": {
          "id": "3693",
          "nameRu": "Баликпапан",
          "nameEn": "Balikpapan",
          "codeSirena": "BPN",
          "codeIata": "BPN",
          "country": {
            "id": "1859",
            "type": "COUNTRY"
          }
        },
        "3694": {
          "id": "3694",
          "nameRu": "Балимо",
          "nameEn": "Balimo",
          "codeSirena": null,
          "codeIata": "OPU",
          "country": {
            "id": "2160",
            "type": "COUNTRY"
          }
        },
        "3697": {
          "id": "3697",
          "nameRu": "Балмаседа",
          "nameEn": "Balmaceda",
          "codeSirena": null,
          "codeIata": "BBA",
          "country": {
            "id": "2097",
            "type": "COUNTRY"
          }
        },
        "3700": {
          "id": "3700",
          "nameRu": "Балтимор",
          "nameEn": "Baltimore",
          "codeSirena": "BWI",
          "codeIata": "BWI",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3704": {
          "id": "3704",
          "nameRu": "Бамага",
          "nameEn": "Bamaga",
          "codeSirena": null,
          "codeIata": "ABM",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3705": {
          "id": "3705",
          "nameRu": "Бамако",
          "nameEn": "Bamako",
          "codeSirena": "BKO",
          "codeIata": "BKO",
          "country": {
            "id": "2140",
            "type": "COUNTRY"
          }
        },
        "3706": {
          "id": "3706",
          "nameRu": "Бамбари",
          "nameEn": "Bambari",
          "codeSirena": null,
          "codeIata": "BBY",
          "country": {
            "id": "2093",
            "type": "COUNTRY"
          }
        },
        "3716": {
          "id": "3716",
          "nameRu": "Бан-Мак-Хен",
          "nameEn": "Ban Mak Khaen",
          "codeSirena": null,
          "codeIata": "BAO",
          "country": {
            "id": "1930",
            "type": "COUNTRY"
          }
        },
        "3723": {
          "id": "3723",
          "nameRu": "Бандар-Ленгех",
          "nameEn": "Bandar Lengeh",
          "codeSirena": null,
          "codeIata": "BDH",
          "country": {
            "id": "1860",
            "type": "COUNTRY"
          }
        },
        "3729": {
          "id": "3729",
          "nameRu": "Бандунду",
          "nameEn": "Bandundu",
          "codeSirena": null,
          "codeIata": "FDU",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "3733": {
          "id": "3733",
          "nameRu": "Бангассу",
          "nameEn": "Bangassou",
          "codeSirena": null,
          "codeIata": "BGU",
          "country": {
            "id": "2093",
            "type": "COUNTRY"
          }
        },
        "3737": {
          "id": "3737",
          "nameRu": "Банги",
          "nameEn": "Bangui",
          "codeSirena": "BGF",
          "codeIata": "BGF",
          "country": {
            "id": "2093",
            "type": "COUNTRY"
          }
        },
        "3738": {
          "id": "3738",
          "nameRu": "Банияла",
          "nameEn": "Baniyala",
          "codeSirena": null,
          "codeIata": "BYX",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "3757": {
          "id": "3757",
          "nameRu": "Барахона",
          "nameEn": "Barahona",
          "codeSirena": null,
          "codeIata": "BRX",
          "country": {
            "id": "1835",
            "type": "COUNTRY"
          }
        },
        "3758": {
          "id": "3758",
          "nameRu": "Баракома",
          "nameEn": "Barakoma",
          "codeSirena": null,
          "codeIata": "VEV",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3767": {
          "id": "3767",
          "nameRu": "Барселоннетт",
          "nameEn": "Barcelonnette",
          "codeSirena": null,
          "codeIata": "BAE",
          "country": {
            "id": "1845",
            "type": "COUNTRY"
          }
        },
        "3768": {
          "id": "3768",
          "nameRu": "Бардера",
          "nameEn": "Bardera",
          "codeSirena": null,
          "codeIata": "BSY",
          "country": {
            "id": "2173",
            "type": "COUNTRY"
          }
        },
        "3780": {
          "id": "3780",
          "nameRu": "Барора",
          "nameEn": "Barora",
          "codeSirena": null,
          "codeIata": "RRI",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3797": {
          "id": "3797",
          "nameRu": "Барроу",
          "nameEn": "Barrow",
          "codeSirena": null,
          "codeIata": "BRW",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3803": {
          "id": "3803",
          "nameRu": "Бартлсвиль",
          "nameEn": "Bartlesville",
          "codeSirena": null,
          "codeIata": "BVO",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3804": {
          "id": "3804",
          "nameRu": "Бартлеттс",
          "nameEn": "Bartletts",
          "codeSirena": null,
          "codeIata": "BSZ",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3806": {
          "id": "3806",
          "nameRu": "Барун-Юрт",
          "nameEn": "Baruun-Urt",
          "codeSirena": null,
          "codeIata": "UUN",
          "country": {
            "id": "1887",
            "type": "COUNTRY"
          }
        },
        "3807": {
          "id": "3807",
          "nameRu": "Басанкусу",
          "nameEn": "Basankusu",
          "codeSirena": null,
          "codeIata": "BSU",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "3811": {
          "id": "3811",
          "nameRu": "Басонго",
          "nameEn": "Basongo",
          "codeSirena": null,
          "codeIata": "BAN",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "3838": {
          "id": "3838",
          "nameRu": "Батуна",
          "nameEn": "Batuna",
          "codeSirena": null,
          "codeIata": "BPF",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3840": {
          "id": "3840",
          "nameRu": "Баукау",
          "nameEn": "Baucau",
          "codeSirena": null,
          "codeIata": "BCH",
          "country": {
            "id": "2181",
            "type": "COUNTRY"
          }
        },
        "3848": {
          "id": "3848",
          "nameRu": "Биамо",
          "nameEn": "Bayamo",
          "codeSirena": null,
          "codeIata": "BYM",
          "country": {
            "id": "1830",
            "type": "COUNTRY"
          }
        },
        "3849": {
          "id": "3849",
          "nameRu": "Баянхонгор",
          "nameEn": "Bayankhongor",
          "codeSirena": null,
          "codeIata": "BYN",
          "country": {
            "id": "1887",
            "type": "COUNTRY"
          }
        },
        "3853": {
          "id": "3853",
          "nameRu": "Базаруто",
          "nameEn": "Bazaruto Island",
          "codeSirena": null,
          "codeIata": "BZB",
          "country": {
            "id": "2148",
            "type": "COUNTRY"
          }
        },
        "3863": {
          "id": "3863",
          "nameRu": "Бомонт",
          "nameEn": "Beaumont",
          "codeSirena": null,
          "codeIata": "BPT",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3871": {
          "id": "3871",
          "nameRu": "Бекли",
          "nameEn": "Beckley",
          "codeSirena": null,
          "codeIata": "BKW",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3881": {
          "id": "3881",
          "nameRu": "Беер-Шева",
          "nameEn": "Beer Sheba",
          "codeSirena": "BEV",
          "codeIata": "BEV",
          "country": {
            "id": "62",
            "type": "COUNTRY"
          }
        },
        "3891": {
          "id": "3891",
          "nameRu": "Бейра",
          "nameEn": "Beira",
          "codeSirena": null,
          "codeIata": "BEW",
          "country": {
            "id": "2148",
            "type": "COUNTRY"
          }
        },
        "3897": {
          "id": "3897",
          "nameRu": "Белен",
          "nameEn": "Belem",
          "codeSirena": null,
          "codeIata": "BEL",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "3898": {
          "id": "3898",
          "nameRu": "Белеп",
          "nameEn": "Belep Island",
          "codeSirena": null,
          "codeIata": "BMY",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "3912": {
          "id": "3912",
          "nameRu": "Бель-Шас",
          "nameEn": "Belle Chasse",
          "codeSirena": null,
          "codeIata": "BCS",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3915": {
          "id": "3915",
          "nameRu": "Бельвиль",
          "nameEn": "Belleville",
          "codeSirena": null,
          "codeIata": "BLV",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3919": {
          "id": "3919",
          "nameRu": "Беллона",
          "nameEn": "Bellona",
          "codeSirena": null,
          "codeIata": "BNY",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "3921": {
          "id": "3921",
          "nameRu": "Бельмар",
          "nameEn": "Belmar",
          "codeSirena": null,
          "codeIata": "BLM",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3922": {
          "id": "3922",
          "nameRu": "Бельмонте",
          "nameEn": "Belmonte",
          "codeSirena": null,
          "codeIata": "BVM",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "3923": {
          "id": "3923",
          "nameRu": "Белмопан",
          "nameEn": "Belmopan",
          "codeSirena": null,
          "codeIata": "BCV",
          "country": {
            "id": "2090",
            "type": "COUNTRY"
          }
        },
        "3924": {
          "id": "3924",
          "nameRu": "Белмаллет",
          "nameEn": "Belmullet",
          "codeSirena": null,
          "codeIata": "BLY",
          "country": {
            "id": "1862",
            "type": "COUNTRY"
          }
        },
        "3926": {
          "id": "3926",
          "nameRu": "Белу-Оризонти",
          "nameEn": "Belo Horizonte",
          "codeSirena": "BHZ",
          "codeIata": "BHZ",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "3943": {
          "id": "3943",
          "nameRu": "Бенгуера",
          "nameEn": "Benguera Island",
          "codeSirena": null,
          "codeIata": "BCW",
          "country": {
            "id": "2148",
            "type": "COUNTRY"
          }
        },
        "3944": {
          "id": "3944",
          "nameRu": "Бени",
          "nameEn": "Beni",
          "codeSirena": null,
          "codeIata": "BNC",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "3948": {
          "id": "3948",
          "nameRu": "Беннетсвиль",
          "nameEn": "Bennettsville",
          "codeSirena": null,
          "codeIata": "BTN",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "3964": {
          "id": "3964",
          "nameRu": "Берген",
          "nameEn": "Bergen",
          "codeSirena": "BGO",
          "codeIata": "BGO",
          "country": {
            "id": "1898",
            "type": "COUNTRY"
          }
        },
        "3996": {
          "id": "3996",
          "nameRu": "Беверли-Спрингс",
          "nameEn": "Beverley Springs",
          "codeSirena": null,
          "codeIata": "BVZ",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "4012": {
          "id": "4012",
          "nameRu": "Биак",
          "nameEn": "Biak",
          "codeSirena": "BIK",
          "codeIata": "BIK",
          "country": {
            "id": "1859",
            "type": "COUNTRY"
          }
        },
        "4032": {
          "id": "4032",
          "nameRu": "Биг-Маунтин",
          "nameEn": "Big Mountain",
          "codeSirena": null,
          "codeIata": "BMX",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "4109": {
          "id": "4109",
          "nameRu": "Блю-Маунтин",
          "nameEn": "Blue Mountain",
          "codeSirena": null,
          "codeIata": "VBM",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "4133": {
          "id": "4133",
          "nameRu": "Боенде",
          "nameEn": "Boende",
          "codeSirena": null,
          "codeIata": "BNB",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "4153": {
          "id": "4153",
          "nameRu": "Бома",
          "nameEn": "Boma",
          "codeSirena": null,
          "codeIata": "BOA",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "4168": {
          "id": "4168",
          "nameRu": "Бора-Бора",
          "nameEn": "Bora Bora",
          "codeSirena": "BOB",
          "codeIata": "BOB",
          "country": {
            "id": "1990",
            "type": "COUNTRY"
          }
        },
        "4174": {
          "id": "4174",
          "nameRu": "Бордж-Баджи-Мохтар",
          "nameEn": "Bordj Badji Mokhtar",
          "codeSirena": null,
          "codeIata": "BMW",
          "country": {
            "id": "1801",
            "type": "COUNTRY"
          }
        },
        "4308": {
          "id": "4308",
          "nameRu": "Бромон",
          "nameEn": "Bromont",
          "codeSirena": null,
          "codeIata": "ZBM",
          "country": {
            "id": "1822",
            "type": "COUNTRY"
          }
        },
        "4345": {
          "id": "4345",
          "nameRu": "Буэнос-Айрес",
          "nameEn": "Buenos Aires",
          "codeSirena": "BUE",
          "codeIata": "BUE",
          "country": {
            "id": "2073",
            "type": "COUNTRY"
          }
        },
        "4355": {
          "id": "4355",
          "nameRu": "Букаву",
          "nameEn": "Bukavu",
          "codeSirena": null,
          "codeIata": "BKY",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "4359": {
          "id": "4359",
          "nameRu": "Булган",
          "nameEn": "Bulgan",
          "codeSirena": null,
          "codeIata": "UGA",
          "country": {
            "id": "1887",
            "type": "COUNTRY"
          }
        },
        "4360": {
          "id": "4360",
          "nameRu": "Балимба",
          "nameEn": "Bulimba",
          "codeSirena": null,
          "codeIata": "BIP",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "4366": {
          "id": "4366",
          "nameRu": "Бумба",
          "nameEn": "Bumba",
          "codeSirena": null,
          "codeIata": "BMB",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "4368": {
          "id": "4368",
          "nameRu": "Банбери",
          "nameEn": "Bunbury",
          "codeSirena": null,
          "codeIata": "BUY",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "4369": {
          "id": "4369",
          "nameRu": "Бандаберг",
          "nameEn": "Bundaberg",
          "codeSirena": null,
          "codeIata": "BDB",
          "country": {
            "id": "1804",
            "type": "COUNTRY"
          }
        },
        "4371": {
          "id": "4371",
          "nameRu": "Буниа",
          "nameEn": "Bunia",
          "codeSirena": null,
          "codeIata": "BUX",
          "country": {
            "id": "2092",
            "type": "COUNTRY"
          }
        },
        "4378": {
          "id": "4378",
          "nameRu": "Барао",
          "nameEn": "Burao",
          "codeSirena": null,
          "codeIata": "BUO",
          "country": {
            "id": "2173",
            "type": "COUNTRY"
          }
        },
        "4389": {
          "id": "4389",
          "nameRu": "Берлингтон (Вермонт)",
          "nameEn": "Burlington (Vermont)",
          "codeSirena": "BTV",
          "codeIata": "BTV",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "4406": {
          "id": "4406",
          "nameRu": "Батлер",
          "nameEn": "Butler",
          "codeSirena": null,
          "codeIata": "BUM",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "4407": {
          "id": "4407",
          "nameRu": "Батлер",
          "nameEn": "Butler",
          "codeSirena": null,
          "codeIata": "BTP",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "4434": {
          "id": "4434",
          "nameRu": "Каен",
          "nameEn": "Caen",
          "codeSirena": "CFR",
          "codeIata": "CFR",
          "country": {
            "id": "1845",
            "type": "COUNTRY"
          }
        },
        "4454": {
          "id": "4454",
          "nameRu": "Каледониа",
          "nameEn": "Caledonia",
          "codeSirena": null,
          "codeIata": "CDE",
          "country": {
            "id": "2159",
            "type": "COUNTRY"
          }
        },
        "4579": {
          "id": "4579",
          "nameRu": "Картахена",
          "nameEn": "Cartagena",
          "codeSirena": "CTG",
          "codeIata": "CTG",
          "country": {
            "id": "1827",
            "type": "COUNTRY"
          }
        },
        "4619": {
          "id": "4619",
          "nameRu": "Катиклан",
          "nameEn": "Caticlan",
          "codeSirena": "MPH",
          "codeIata": "MPH",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "4930": {
          "id": "4930",
          "nameRu": "Колумбия",
          "nameEn": "Columbia",
          "codeSirena": "CAE",
          "codeIata": "CAE",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "5109": {
          "id": "5109",
          "nameRu": "Кюрасао",
          "nameEn": "Curacao",
          "codeSirena": null,
          "codeIata": "CUR",
          "country": {
            "id": "2071",
            "type": "COUNTRY"
          }
        },
        "5131": {
          "id": "5131",
          "nameRu": "Даегу",
          "nameEn": "Daegu",
          "codeSirena": null,
          "codeIata": "TAE",
          "country": {
            "id": "1869",
            "type": "COUNTRY"
          }
        },
        "5133": {
          "id": "5133",
          "nameRu": "Дает",
          "nameEn": "Daet",
          "codeSirena": null,
          "codeIata": "DTE",
          "country": {
            "id": "1905",
            "type": "COUNTRY"
          }
        },
        "5168": {
          "id": "5168",
          "nameRu": "Дапаризо",
          "nameEn": "Daparizo",
          "codeSirena": null,
          "codeIata": "DAE",
          "country": {
            "id": "1858",
            "type": "COUNTRY"
          }
        },
        "5407": {
          "id": "5407",
          "nameRu": "Дагвей",
          "nameEn": "Dugway",
          "codeSirena": null,
          "codeIata": "DPG",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "5833": {
          "id": "5833",
          "nameRu": "Формоза",
          "nameEn": "Formosa",
          "codeSirena": null,
          "codeIata": "FMA",
          "country": {
            "id": "2073",
            "type": "COUNTRY"
          }
        },
        "5892": {
          "id": "5892",
          "nameRu": "Форт-Уэйн",
          "nameEn": "Fort Wayne",
          "codeSirena": null,
          "codeIata": "FWA",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "5898": {
          "id": "5898",
          "nameRu": "Фортуна-Ледж",
          "nameEn": "Fortuna Ledge",
          "codeSirena": null,
          "codeIata": "FTL",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "5973": {
          "id": "5973",
          "nameRu": "Габес",
          "nameEn": "Gabes",
          "codeSirena": null,
          "codeIata": "GAE",
          "country": {
            "id": "1933",
            "type": "COUNTRY"
          }
        },
        "6042": {
          "id": "6042",
          "nameRu": "Гатока",
          "nameEn": "Gatokae",
          "codeSirena": null,
          "codeIata": "GTA",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "6344": {
          "id": "6344",
          "nameRu": "Гимараес",
          "nameEn": "Guimaraes",
          "codeSirena": null,
          "codeIata": "GMS",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "6367": {
          "id": "6367",
          "nameRu": "Гуш-Катиф",
          "nameEn": "Gush Katif",
          "codeSirena": null,
          "codeIata": "GHK",
          "country": {
            "id": "62",
            "type": "COUNTRY"
          }
        },
        "6494": {
          "id": "6494",
          "nameRu": "Азбрук",
          "nameEn": "Hazebrouck",
          "codeSirena": null,
          "codeIata": "HZB",
          "country": {
            "id": "1845",
            "type": "COUNTRY"
          }
        },
        "6536": {
          "id": "6536",
          "nameRu": "Эрмосилио",
          "nameEn": "Hermosillo",
          "codeSirena": null,
          "codeIata": "HMO",
          "country": {
            "id": "2147",
            "type": "COUNTRY"
          }
        },
        "6551": {
          "id": "6551",
          "nameRu": "Хьенгене",
          "nameEn": "Hienghene",
          "codeSirena": null,
          "codeIata": "HNG",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "6636": {
          "id": "6636",
          "nameRu": "Хуаилу",
          "nameEn": "Houailou",
          "codeSirena": null,
          "codeIata": "HLU",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "6738": {
          "id": "6738",
          "nameRu": "Иль-Де-Пинс",
          "nameEn": "Ile Des Pins",
          "codeSirena": null,
          "codeIata": "ILP",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "6740": {
          "id": "6740",
          "nameRu": "Иль-Квин",
          "nameEn": "Ile Ouen",
          "codeSirena": null,
          "codeIata": "IOU",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "6835": {
          "id": "6835",
          "nameRu": "Айрон-Моунтан",
          "nameEn": "Iron Mountain",
          "codeSirena": null,
          "codeIata": "IMT",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "6850": {
          "id": "6850",
          "nameRu": "Айлай",
          "nameEn": "Islay",
          "codeSirena": null,
          "codeIata": "ILY",
          "country": {
            "id": "22",
            "type": "COUNTRY"
          }
        },
        "6852": {
          "id": "6852",
          "nameRu": "Айл-Оф-Мэн",
          "nameEn": "Isle Of Man",
          "codeSirena": null,
          "codeIata": "IOM",
          "country": {
            "id": "22",
            "type": "COUNTRY"
          }
        },
        "6853": {
          "id": "6853",
          "nameRu": "Айл-Оф-Скай",
          "nameEn": "Isle Of Skye",
          "codeSirena": null,
          "codeIata": "SKL",
          "country": {
            "id": "22",
            "type": "COUNTRY"
          }
        },
        "6856": {
          "id": "6856",
          "nameRu": "Айслип",
          "nameEn": "Islip",
          "codeSirena": null,
          "codeIata": "ISP",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "7054": {
          "id": "7054",
          "nameRu": "Каеди",
          "nameEn": "Kaedi",
          "codeSirena": null,
          "codeIata": "KED",
          "country": {
            "id": "2144",
            "type": "COUNTRY"
          }
        },
        "7055": {
          "id": "7055",
          "nameRu": "Каеле",
          "nameEn": "Kaele",
          "codeSirena": null,
          "codeIata": "KLE",
          "country": {
            "id": "2098",
            "type": "COUNTRY"
          }
        },
        "7075": {
          "id": "7075",
          "nameRu": "Кейк",
          "nameEn": "Kake",
          "codeSirena": null,
          "codeIata": "KAE",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "7118": {
          "id": "7118",
          "nameRu": "Камфангсаен",
          "nameEn": "Kamphangsaen",
          "codeSirena": null,
          "codeIata": "KDT",
          "country": {
            "id": "1930",
            "type": "COUNTRY"
          }
        },
        "7409": {
          "id": "7409",
          "nameRu": "Кирьят",
          "nameEn": "Kiryat Shmona",
          "codeSirena": null,
          "codeIata": "KSW",
          "country": {
            "id": "62",
            "type": "COUNTRY"
          }
        },
        "7452": {
          "id": "7452",
          "nameRu": "Косаели",
          "nameEn": "Kocaeli",
          "codeSirena": null,
          "codeIata": "KCO",
          "country": {
            "id": "81",
            "type": "COUNTRY"
          }
        },
        "7488": {
          "id": "7488",
          "nameRu": "Коне",
          "nameEn": "Kone",
          "codeSirena": null,
          "codeIata": "KNQ",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "7516": {
          "id": "7516",
          "nameRu": "Косра",
          "nameEn": "Kosrae",
          "codeSirena": "KSA",
          "codeIata": "KSA",
          "country": {
            "id": "2109",
            "type": "COUNTRY"
          }
        },
        "7532": {
          "id": "7532",
          "nameRu": "Коумас",
          "nameEn": "Koumac",
          "codeSirena": null,
          "codeIata": "KOC",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "7608": {
          "id": "7608",
          "nameRu": "Квайлабеси",
          "nameEn": "Kwailabesi",
          "codeSirena": null,
          "codeIata": "KWS",
          "country": {
            "id": "2168",
            "type": "COUNTRY"
          }
        },
        "7678": {
          "id": "7678",
          "nameRu": "Лае",
          "nameEn": "Lae",
          "codeSirena": null,
          "codeIata": "LAE",
          "country": {
            "id": "2160",
            "type": "COUNTRY"
          }
        },
        "7679": {
          "id": "7679",
          "nameRu": "Лае",
          "nameEn": "Lae",
          "codeSirena": null,
          "codeIata": "LML",
          "country": {
            "id": "2139",
            "type": "COUNTRY"
          }
        },
        "7680": {
          "id": "7680",
          "nameRu": "Лесё",
          "nameEn": "Laeso Island",
          "codeSirena": null,
          "codeIata": "BYR",
          "country": {
            "id": "1833",
            "type": "COUNTRY"
          }
        },
        "7717": {
          "id": "7717",
          "nameRu": "Лейкхерст",
          "nameEn": "Lakehurst",
          "codeSirena": null,
          "codeIata": "NEL",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "7914": {
          "id": "7914",
          "nameRu": "Лифоу",
          "nameEn": "Lifou",
          "codeSirena": null,
          "codeIata": "LIF",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "8045": {
          "id": "8045",
          "nameRu": "Лос-Аламос",
          "nameEn": "Los Alamos",
          "codeSirena": null,
          "codeIata": "LAM",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "8145": {
          "id": "8145",
          "nameRu": "Мака",
          "nameEn": "Macae",
          "codeSirena": null,
          "codeIata": "MEA",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "8168": {
          "id": "8168",
          "nameRu": "Мадера",
          "nameEn": "Madera",
          "codeSirena": null,
          "codeIata": "MAE",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "8177": {
          "id": "8177",
          "nameRu": "Ма-Хонг-Сан",
          "nameEn": "Mae Hong Son",
          "codeSirena": null,
          "codeIata": "HGN",
          "country": {
            "id": "1930",
            "type": "COUNTRY"
          }
        },
        "8178": {
          "id": "8178",
          "nameRu": "Мае-Сот",
          "nameEn": "Mae Sot",
          "codeSirena": null,
          "codeIata": "MAQ",
          "country": {
            "id": "1930",
            "type": "COUNTRY"
          }
        },
        "8180": {
          "id": "8180",
          "nameRu": "Маеуо",
          "nameEn": "Maewo",
          "codeSirena": "MWF",
          "codeIata": "MWF",
          "country": {
            "id": "2191",
            "type": "COUNTRY"
          }
        },
        "8332": {
          "id": "8332",
          "nameRu": "Манзанилло",
          "nameEn": "Manzanillo",
          "codeSirena": null,
          "codeIata": "MZO",
          "country": {
            "id": "1830",
            "type": "COUNTRY"
          }
        },
        "8365": {
          "id": "8365",
          "nameRu": "Маре",
          "nameEn": "Mare",
          "codeSirena": null,
          "codeIata": "MEE",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "8433": {
          "id": "8433",
          "nameRu": "Масада",
          "nameEn": "Masada",
          "codeSirena": null,
          "codeIata": "MTZ",
          "country": {
            "id": "62",
            "type": "COUNTRY"
          }
        },
        "8440": {
          "id": "8440",
          "nameRu": "Мазеру",
          "nameEn": "Maseru",
          "codeSirena": null,
          "codeIata": "MSU",
          "country": {
            "id": "2136",
            "type": "COUNTRY"
          }
        },
        "8495": {
          "id": "8495",
          "nameRu": "Мазатлан",
          "nameEn": "Mazatlan",
          "codeSirena": null,
          "codeIata": "MZT",
          "country": {
            "id": "2147",
            "type": "COUNTRY"
          }
        },
        "8556": {
          "id": "8556",
          "nameRu": "Мемминген",
          "nameEn": "Memmingen",
          "codeSirena": "FMM",
          "codeIata": "FMM",
          "country": {
            "id": "21",
            "type": "COUNTRY"
          }
        },
        "8630": {
          "id": "8630",
          "nameRu": "Милледжвиль",
          "nameEn": "Milledgeville",
          "codeSirena": null,
          "codeIata": "MLJ",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "8688": {
          "id": "8688",
          "nameRu": "Митспех-Рамон",
          "nameEn": "Mitspeh Ramon",
          "codeSirena": null,
          "codeIata": "MIP",
          "country": {
            "id": "62",
            "type": "COUNTRY"
          }
        },
        "8712": {
          "id": "8712",
          "nameRu": "Мобил",
          "nameEn": "Mobile",
          "codeSirena": null,
          "codeIata": "MOB",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "8781": {
          "id": "8781",
          "nameRu": "Монтеррей",
          "nameEn": "Monterrey",
          "codeSirena": "MTY",
          "codeIata": "MTY",
          "country": {
            "id": "2147",
            "type": "COUNTRY"
          }
        },
        "8803": {
          "id": "8803",
          "nameRu": "Муреа",
          "nameEn": "Moorea",
          "codeSirena": "MOZ",
          "codeIata": "MOZ",
          "country": {
            "id": "1990",
            "type": "COUNTRY"
          }
        },
        "8841": {
          "id": "8841",
          "nameRu": "Мозер-Бэй",
          "nameEn": "Moser Bay",
          "codeSirena": null,
          "codeIata": "KMY",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "8842": {
          "id": "8842",
          "nameRu": "Мозес-Лэйк",
          "nameEn": "Moses Lake",
          "codeSirena": null,
          "codeIata": "MWH",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "8843": {
          "id": "8843",
          "nameRu": "Мозес-Поинт",
          "nameEn": "Moses Point",
          "codeSirena": "MOS",
          "codeIata": "MOS",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "8845": {
          "id": "8845",
          "nameRu": "Мосьоен",
          "nameEn": "Mosjoen",
          "codeSirena": null,
          "codeIata": "MJF",
          "country": {
            "id": "1898",
            "type": "COUNTRY"
          }
        },
        "8846": {
          "id": "8846",
          "nameRu": "Москуера",
          "nameEn": "Mosquera",
          "codeSirena": "MQR",
          "codeIata": "MQR",
          "country": {
            "id": "1827",
            "type": "COUNTRY"
          }
        },
        "8847": {
          "id": "8847",
          "nameRu": "Мосс",
          "nameEn": "Moss",
          "codeSirena": null,
          "codeIata": "RYG",
          "country": {
            "id": "1898",
            "type": "COUNTRY"
          }
        },
        "8848": {
          "id": "8848",
          "nameRu": "Моссел-Бэй",
          "nameEn": "Mossel Bay",
          "codeSirena": null,
          "codeIata": "MZY",
          "country": {
            "id": "1919",
            "type": "COUNTRY"
          }
        },
        "8849": {
          "id": "8849",
          "nameRu": "Моссенджо",
          "nameEn": "Mossendjo",
          "codeSirena": null,
          "codeIata": "MSX",
          "country": {
            "id": "2094",
            "type": "COUNTRY"
          }
        },
        "8850": {
          "id": "8850",
          "nameRu": "Моссоро",
          "nameEn": "Mossoro",
          "codeSirena": null,
          "codeIata": "MVF",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "8851": {
          "id": "8851",
          "nameRu": "Мостаганем",
          "nameEn": "Mostaganem",
          "codeSirena": null,
          "codeIata": "MQV",
          "country": {
            "id": "1801",
            "type": "COUNTRY"
          }
        },
        "8853": {
          "id": "8853",
          "nameRu": "Мостар",
          "nameEn": "Mostar",
          "codeSirena": null,
          "codeIata": "OMO",
          "country": {
            "id": "2076",
            "type": "COUNTRY"
          }
        },
        "8854": {
          "id": "8854",
          "nameRu": "Мостейрос",
          "nameEn": "Mosteiros",
          "codeSirena": null,
          "codeIata": "MTI",
          "country": {
            "id": "2100",
            "type": "COUNTRY"
          }
        },
        "8855": {
          "id": "8855",
          "nameRu": "Мостин",
          "nameEn": "Mostyn",
          "codeSirena": null,
          "codeIata": "MZS",
          "country": {
            "id": "1879",
            "type": "COUNTRY"
          }
        },
        "8856": {
          "id": "8856",
          "nameRu": "Мосул",
          "nameEn": "Mosul",
          "codeSirena": "OSM",
          "codeIata": "OSM",
          "country": {
            "id": "1861",
            "type": "COUNTRY"
          }
        },
        "8869": {
          "id": "8869",
          "nameRu": "Маунт-Оу",
          "nameEn": "Mount Aue",
          "codeSirena": null,
          "codeIata": "UAE",
          "country": {
            "id": "2160",
            "type": "COUNTRY"
          }
        },
        "8921": {
          "id": "8921",
          "nameRu": "Муео",
          "nameEn": "Mueo",
          "codeSirena": null,
          "codeIata": "PDC",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "9089": {
          "id": "9089",
          "nameRu": "Натитингоу",
          "nameEn": "Natitingou",
          "codeSirena": null,
          "codeIata": "NAE",
          "country": {
            "id": "2082",
            "type": "COUNTRY"
          }
        },
        "9301": {
          "id": "9301",
          "nameRu": "Нумеа",
          "nameEn": "Noumea",
          "codeSirena": null,
          "codeIata": "NOU",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "9320": {
          "id": "9320",
          "nameRu": "Нуева-Герона",
          "nameEn": "Nueva Gerona",
          "codeSirena": null,
          "codeIata": "GER",
          "country": {
            "id": "1830",
            "type": "COUNTRY"
          }
        },
        "9536": {
          "id": "9536",
          "nameRu": "Острава",
          "nameEn": "Ostrava",
          "codeSirena": "OSR",
          "codeIata": "OSR",
          "country": {
            "id": "1832",
            "type": "COUNTRY"
          }
        },
        "9565": {
          "id": "9565",
          "nameRu": "Увеа",
          "nameEn": "Ouvea",
          "codeSirena": null,
          "codeIata": "UVE",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "10057": {
          "id": "10057",
          "nameRu": "Поум",
          "nameEn": "Poum",
          "codeSirena": null,
          "codeIata": "PUV",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "10137": {
          "id": "10137",
          "nameRu": "Пуэрто-Леда",
          "nameEn": "Puerto Leda",
          "codeSirena": null,
          "codeIata": "PBT",
          "country": {
            "id": "2165",
            "type": "COUNTRY"
          }
        },
        "10146": {
          "id": "10146",
          "nameRu": "Пуэрто-Паез",
          "nameEn": "Puerto Paez",
          "codeSirena": null,
          "codeIata": "PPZ",
          "country": {
            "id": "2188",
            "type": "COUNTRY"
          }
        },
        "10163": {
          "id": "10163",
          "nameRu": "Пульман",
          "nameEn": "Pullman",
          "codeSirena": null,
          "codeIata": "PUW",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "10365": {
          "id": "10365",
          "nameRu": "Ренсселаер",
          "nameEn": "Rensselaer",
          "codeSirena": null,
          "codeIata": "RNZ",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "10374": {
          "id": "10374",
          "nameRu": "Реталхулео",
          "nameEn": "Retalhuleu",
          "codeSirena": null,
          "codeIata": "RER",
          "country": {
            "id": "2120",
            "type": "COUNTRY"
          }
        },
        "10662": {
          "id": "10662",
          "nameRu": "Самос",
          "nameEn": "Samos",
          "codeSirena": null,
          "codeIata": "SMI",
          "country": {
            "id": "1850",
            "type": "COUNTRY"
          }
        },
        "10734": {
          "id": "10734",
          "nameRu": "Сан-Педро-Сула",
          "nameEn": "San Pedro Sula",
          "codeSirena": "SAP",
          "codeIata": "SAP",
          "country": {
            "id": "2125",
            "type": "COUNTRY"
          }
        },
        "10810": {
          "id": "10810",
          "nameRu": "Санта-Мария",
          "nameEn": "Santa Maria",
          "codeSirena": null,
          "codeIata": "RIA",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "10826": {
          "id": "10826",
          "nameRu": "Сантана-Рамос",
          "nameEn": "Santana Ramos",
          "codeSirena": null,
          "codeIata": "SRO",
          "country": {
            "id": "1827",
            "type": "COUNTRY"
          }
        },
        "10999": {
          "id": "10999",
          "nameRu": "Сео-де-Юргель",
          "nameEn": "Seo De Urgel",
          "codeSirena": null,
          "codeIata": "LEU",
          "country": {
            "id": "1920",
            "type": "COUNTRY"
          }
        },
        "11239": {
          "id": "11239",
          "nameRu": "Согамосо",
          "nameEn": "Sogamoso",
          "codeSirena": null,
          "codeIata": "SOX",
          "country": {
            "id": "1827",
            "type": "COUNTRY"
          }
        },
        "11538": {
          "id": "11538",
          "nameRu": "Хелл",
          "nameEn": "Svolvaer",
          "codeSirena": null,
          "codeIata": "SVJ",
          "country": {
            "id": "1898",
            "type": "COUNTRY"
          }
        },
        "11575": {
          "id": "11575",
          "nameRu": "Табуаеран",
          "nameEn": "Tabuaeran",
          "codeSirena": null,
          "codeIata": "TNV",
          "country": {
            "id": "2129",
            "type": "COUNTRY"
          }
        },
        "11848": {
          "id": "11848",
          "nameRu": "Тига",
          "nameEn": "Tiga",
          "codeSirena": null,
          "codeIata": "TGJ",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "12046": {
          "id": "12046",
          "nameRu": "Толедо",
          "nameEn": "Toledo",
          "codeSirena": null,
          "codeIata": "TOL",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "12047": {
          "id": "12047",
          "nameRu": "Толедо",
          "nameEn": "Toledo",
          "codeSirena": null,
          "codeIata": "TOW",
          "country": {
            "id": "2086",
            "type": "COUNTRY"
          }
        },
        "12048": {
          "id": "12048",
          "nameRu": "Толедо",
          "nameEn": "Toledo",
          "codeSirena": null,
          "codeIata": "TDO",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "12087": {
          "id": "12087",
          "nameRu": "Тухо",
          "nameEn": "Touho",
          "codeSirena": null,
          "codeIata": "TOU",
          "country": {
            "id": "2150",
            "type": "COUNTRY"
          }
        },
        "12129": {
          "id": "12129",
          "nameRu": "Трондхейм",
          "nameEn": "Trondheim",
          "codeSirena": "TRD",
          "codeIata": "TRD",
          "country": {
            "id": "1898",
            "type": "COUNTRY"
          }
        },
        "12255": {
          "id": "12255",
          "nameRu": "Иотвата",
          "nameEn": "Yotvata",
          "codeSirena": null,
          "codeIata": "YOT",
          "country": {
            "id": "62",
            "type": "COUNTRY"
          }
        },
        "12312": {
          "id": "12312",
          "nameRu": "Зелёна-Гора",
          "nameEn": "Zielona Gora",
          "codeSirena": null,
          "codeIata": "IEG",
          "country": {
            "id": "1906",
            "type": "COUNTRY"
          }
        },
        "12399": {
          "id": "12399",
          "nameRu": "Апингтон",
          "nameEn": "Upington",
          "codeSirena": null,
          "codeIata": "UTN",
          "country": {
            "id": "1919",
            "type": "COUNTRY"
          }
        },
        "12400": {
          "id": "12400",
          "nameRu": "Апленд",
          "nameEn": "Upland",
          "codeSirena": null,
          "codeIata": "CCB",
          "country": {
            "id": "1937",
            "type": "COUNTRY"
          }
        },
        "12440": {
          "id": "12440",
          "nameRu": "Ваерой",
          "nameEn": "Vaeroy",
          "codeSirena": null,
          "codeIata": "VRY",
          "country": {
            "id": "1898",
            "type": "COUNTRY"
          }
        },
        "12464": {
          "id": "12464",
          "nameRu": "Валледапар",
          "nameEn": "Valledupar",
          "codeSirena": null,
          "codeIata": "VUP",
          "country": {
            "id": "1827",
            "type": "COUNTRY"
          }
        },
        "12519": {
          "id": "12519",
          "nameRu": "Вестманнаэйар",
          "nameEn": "Vestmannaeyjar",
          "codeSirena": null,
          "codeIata": "VEY",
          "country": {
            "id": "1815",
            "type": "COUNTRY"
          }
        },
        "12564": {
          "id": "12564",
          "nameRu": "Виллахермоза",
          "nameEn": "Villahermosa",
          "codeSirena": "VSA",
          "codeIata": "VSA",
          "country": {
            "id": "2147",
            "type": "COUNTRY"
          }
        },
        "12619": {
          "id": "12619",
          "nameRu": "Вади-Эд-Давасир",
          "nameEn": "Wadi Ad Dawasir",
          "codeSirena": null,
          "codeIata": "WAE",
          "country": {
            "id": "1913",
            "type": "COUNTRY"
          }
        }
      },
      "AIRPORT": {
        "1": {
          "id": "1",
          "nameRu": "Шереметьево",
          "nameEn": "Sheremetyevo",
          "codeSirena": "ШРМ",
          "codeIata": "SVO",
          "city": {
            "id": "1",
            "type": "CITY"
          }
        },
        "2": {
          "id": "2",
          "nameRu": "Домодедово",
          "nameEn": "Domodedovo",
          "codeSirena": "ДМД",
          "codeIata": "DME",
          "city": {
            "id": "1",
            "type": "CITY"
          }
        },
        "3": {
          "id": "3",
          "nameRu": "Внуково",
          "nameEn": "Vnukovo",
          "codeSirena": "ВНК",
          "codeIata": "VKO",
          "city": {
            "id": "1",
            "type": "CITY"
          }
        },
        "4": {
          "id": "4",
          "nameRu": "Быково",
          "nameEn": "Bykovo",
          "codeSirena": "БКВ",
          "codeIata": "BKA",
          "city": {
            "id": "1",
            "type": "CITY"
          }
        },
        "7": {
          "id": "7",
          "nameRu": "Пулково",
          "nameEn": "Pulkovo",
          "codeSirena": "ПЛК",
          "codeIata": "LED",
          "city": {
            "id": "21",
            "type": "CITY"
          }
        },
        "28": {
          "id": "28",
          "nameRu": "Гейдар Алиев",
          "nameEn": "Heydar Aliyev Intl",
          "codeSirena": "БАК",
          "codeIata": "GYD",
          "city": {
            "id": "853",
            "type": "CITY"
          }
        },
        "68": {
          "id": "68",
          "nameRu": "Элефтериос-Венизелос",
          "nameEn": "Eleftherios Venizelos",
          "codeSirena": "АТХ",
          "codeIata": "ATH",
          "city": {
            "id": "1704",
            "type": "CITY"
          }
        },
        "81": {
          "id": "81",
          "nameRu": "Орио-Аль-Серио",
          "nameEn": "Orio Al Serio",
          "codeSirena": "BGY",
          "codeIata": "BGY",
          "city": {
            "id": "2666",
            "type": "CITY"
          }
        },
        "2028": {
          "id": "2028",
          "nameRu": "Аеропуерто-Хато",
          "nameEn": "Aeropuerto Hato",
          "codeSirena": null,
          "codeIata": "CUR",
          "city": {
            "id": "5109",
            "type": "CITY"
          }
        },
        "2047": {
          "id": "2047",
          "nameRu": "Камаринес-Норте",
          "nameEn": "Camarines Norte",
          "codeSirena": null,
          "codeIata": "DTE",
          "city": {
            "id": "5133",
            "type": "CITY"
          }
        },
        "2311": {
          "id": "2311",
          "nameRu": "База ВВС Майкл",
          "nameEn": "Michael AAF",
          "codeSirena": null,
          "codeIata": "DPG",
          "city": {
            "id": "5407",
            "type": "CITY"
          }
        },
        "2364": {
          "id": "2364",
          "nameRu": "Лихай-Валлей",
          "nameEn": "Lehigh Valley Intl",
          "codeSirena": null,
          "codeIata": "ABE",
          "city": {
            "id": "3236",
            "type": "CITY"
          }
        },
        "2677": {
          "id": "2677",
          "nameRu": "Эль-Паку",
          "nameEn": "El Pucu",
          "codeSirena": null,
          "codeIata": "FMA",
          "city": {
            "id": "5833",
            "type": "CITY"
          }
        },
        "2735": {
          "id": "2735",
          "nameRu": "Баер-Филд",
          "nameEn": "Municipal/Baer Field",
          "codeSirena": null,
          "codeIata": "FWA",
          "city": {
            "id": "5892",
            "type": "CITY"
          }
        },
        "3013": {
          "id": "3013",
          "nameRu": "Саев",
          "nameEn": "Saeve",
          "codeSirena": null,
          "codeIata": "GSE",
          "city": {
            "id": "1717",
            "type": "CITY"
          }
        },
        "3284": {
          "id": "3284",
          "nameRu": "Мервиль / Калонн",
          "nameEn": "Merville/Calonne",
          "codeSirena": null,
          "codeIata": "HZB",
          "city": {
            "id": "6494",
            "type": "CITY"
          }
        },
        "3318": {
          "id": "3318",
          "nameRu": "Пескуэйра Гарся",
          "nameEn": "Gen Pesqueira Garcia",
          "codeSirena": null,
          "codeIata": "HMO",
          "city": {
            "id": "6536",
            "type": "CITY"
          }
        },
        "3617": {
          "id": "3617",
          "nameRu": "Рональдсвэй",
          "nameEn": "Ronaldsway",
          "codeSirena": null,
          "codeIata": "IOM",
          "city": {
            "id": "6852",
            "type": "CITY"
          }
        },
        "3618": {
          "id": "3618",
          "nameRu": "Броадфорд",
          "nameEn": "Broadford",
          "codeSirena": null,
          "codeIata": "SKL",
          "city": {
            "id": "6853",
            "type": "CITY"
          }
        },
        "3621": {
          "id": "3621",
          "nameRu": "Лонг-Айленд-Макартур",
          "nameEn": "Long Island Macarthur",
          "codeSirena": null,
          "codeIata": "ISP",
          "city": {
            "id": "6856",
            "type": "CITY"
          }
        },
        "3830": {
          "id": "3830",
          "nameRu": "Гидроаэропорт",
          "nameEn": "Sea Plane Base",
          "codeSirena": null,
          "codeIata": "KAE",
          "city": {
            "id": "7075",
            "type": "CITY"
          }
        },
        "4419": {
          "id": "4419",
          "nameRu": "Надзаб",
          "nameEn": "Nadzab",
          "codeSirena": null,
          "codeIata": "LAE",
          "city": {
            "id": "7678",
            "type": "CITY"
          }
        },
        "4456": {
          "id": "4456",
          "nameRu": "Наек",
          "nameEn": "Naec",
          "codeSirena": null,
          "codeIata": "NEL",
          "city": {
            "id": "7717",
            "type": "CITY"
          }
        },
        "4895": {
          "id": "4895",
          "nameRu": "Мае Сот",
          "nameEn": "Mae Sot",
          "codeSirena": null,
          "codeIata": "MAQ",
          "city": {
            "id": "8178",
            "type": "CITY"
          }
        },
        "5146": {
          "id": "5146",
          "nameRu": "Мошоешо",
          "nameEn": "Moshoeshoe Intl",
          "codeSirena": null,
          "codeIata": "MSU",
          "city": {
            "id": "8440",
            "type": "CITY"
          }
        },
        "5197": {
          "id": "5197",
          "nameRu": "Генерал Рафаэль Буелна",
          "nameEn": "Gen Rafael Buelna",
          "codeSirena": null,
          "codeIata": "MZT",
          "city": {
            "id": "8495",
            "type": "CITY"
          }
        },
        "5254": {
          "id": "5254",
          "nameRu": "Алгой",
          "nameEn": "Allgaeu",
          "codeSirena": "FMM",
          "codeIata": "FMM",
          "city": {
            "id": "8556",
            "type": "CITY"
          }
        },
        "5420": {
          "id": "5420",
          "nameRu": "Моб Аэроспейс",
          "nameEn": "Mob Aerospace",
          "codeSirena": null,
          "codeIata": "BFM",
          "city": {
            "id": "8712",
            "type": "CITY"
          }
        },
        "5477": {
          "id": "5477",
          "nameRu": "Аеропуерто-Дель-Норте",
          "nameEn": "Aeropuerto Del Norte",
          "codeSirena": null,
          "codeIata": "NTR",
          "city": {
            "id": "8781",
            "type": "CITY"
          }
        },
        "5504": {
          "id": "5504",
          "nameRu": "Темае",
          "nameEn": "Temae",
          "codeSirena": "MOZ",
          "codeIata": "MOZ",
          "city": {
            "id": "8803",
            "type": "CITY"
          }
        },
        "5539": {
          "id": "5539",
          "nameRu": "Мозес-Лэйк",
          "nameEn": "Grant County",
          "codeSirena": null,
          "codeIata": "MWH",
          "city": {
            "id": "8842",
            "type": "CITY"
          }
        },
        "5540": {
          "id": "5540",
          "nameRu": "База ВВС Ларсон",
          "nameEn": "Larson AFB",
          "codeSirena": null,
          "codeIata": "LRN",
          "city": {
            "id": "8842",
            "type": "CITY"
          }
        },
        "5544": {
          "id": "5544",
          "nameRu": "Мосс-Рюгге",
          "nameEn": "Moss-Rygge",
          "codeSirena": null,
          "codeIata": "RYG",
          "city": {
            "id": "8847",
            "type": "CITY"
          }
        },
        "5987": {
          "id": "5987",
          "nameRu": "Маджента",
          "nameEn": "Magenta",
          "codeSirena": null,
          "codeIata": "GEA",
          "city": {
            "id": "9301",
            "type": "CITY"
          }
        },
        "5988": {
          "id": "5988",
          "nameRu": "Тонтоута",
          "nameEn": "Tontouta",
          "codeSirena": null,
          "codeIata": "NOU",
          "city": {
            "id": "9301",
            "type": "CITY"
          }
        },
        "6003": {
          "id": "6003",
          "nameRu": "Рафаэль Кабрера",
          "nameEn": "Rafael Cabrera",
          "codeSirena": null,
          "codeIata": "GER",
          "city": {
            "id": "9320",
            "type": "CITY"
          }
        },
        "6215": {
          "id": "6215",
          "nameRu": "Моснов",
          "nameEn": "Mosnov",
          "codeSirena": "OSR",
          "codeIata": "OSR",
          "city": {
            "id": "9536",
            "type": "CITY"
          }
        },
        "7070": {
          "id": "7070",
          "nameRu": "Король Халид",
          "nameEn": "King Khaled Intl",
          "codeSirena": "РУХ",
          "codeIata": "RUH",
          "city": {
            "id": "2833",
            "type": "CITY"
          }
        },
        "7359": {
          "id": "7359",
          "nameRu": "Рамон Вилледа Моралес",
          "nameEn": "Ramon Villeda Morales",
          "codeSirena": "SAP",
          "codeIata": "SAP",
          "city": {
            "id": "10734",
            "type": "CITY"
          }
        },
        "7449": {
          "id": "7449",
          "nameRu": "Сантана Рамос",
          "nameEn": "Santana Ramos",
          "codeSirena": null,
          "codeIata": "SRO",
          "city": {
            "id": "10826",
            "type": "CITY"
          }
        },
        "8115": {
          "id": "8115",
          "nameRu": "Остров Фаннинг",
          "nameEn": "Tabuaeran",
          "codeSirena": null,
          "codeIata": "TNV",
          "city": {
            "id": "11575",
            "type": "CITY"
          }
        },
        "8447": {
          "id": "8447",
          "nameRu": "Толедо",
          "nameEn": "Toledo",
          "codeSirena": null,
          "codeIata": "TDZ",
          "city": {
            "id": "12046",
            "type": "CITY"
          }
        },
        "8448": {
          "id": "8448",
          "nameRu": "Экспресс",
          "nameEn": "Express",
          "codeSirena": null,
          "codeIata": "TOL",
          "city": {
            "id": "12046",
            "type": "CITY"
          }
        },
        "8450": {
          "id": "8450",
          "nameRu": "Уинлок",
          "nameEn": "Winlock",
          "codeSirena": null,
          "codeIata": "TDO",
          "city": {
            "id": "12048",
            "type": "CITY"
          }
        },
        "8532": {
          "id": "8532",
          "nameRu": "Ваернес",
          "nameEn": "Vaernes",
          "codeSirena": "TRD",
          "codeIata": "TRD",
          "city": {
            "id": "12129",
            "type": "CITY"
          }
        },
        "8680": {
          "id": "8680",
          "nameRu": "Кейбл",
          "nameEn": "Cable",
          "codeSirena": null,
          "codeIata": "CCB",
          "city": {
            "id": "12400",
            "type": "CITY"
          }
        },
        "8791": {
          "id": "8791",
          "nameRu": "Монтикьяри",
          "nameEn": "Montichiari",
          "codeSirena": "VBS",
          "codeIata": "VBS",
          "city": {
            "id": "2876",
            "type": "CITY"
          }
        },
        "8829": {
          "id": "8829",
          "nameRu": "Капитан Карлос Перез",
          "nameEn": "Capitan Carlos Perez",
          "codeSirena": "VSA",
          "codeIata": "VSA",
          "city": {
            "id": "12564",
            "type": "CITY"
          }
        },
        "9320": {
          "id": "9320",
          "nameRu": "Эвелио Хавьер",
          "nameEn": "Evelio Javier",
          "codeSirena": null,
          "codeIata": "EUQ",
          "city": {
            "id": "3389",
            "type": "CITY"
          }
        },
        "9322": {
          "id": "9322",
          "nameRu": "Сьерро-Морено",
          "nameEn": "Cerro Moreno",
          "codeSirena": null,
          "codeIata": "ANF",
          "city": {
            "id": "3391",
            "type": "CITY"
          }
        },
        "9338": {
          "id": "9338",
          "nameRu": "Фагали",
          "nameEn": "Fagali I",
          "codeSirena": null,
          "codeIata": "FGI",
          "city": {
            "id": "3409",
            "type": "CITY"
          }
        },
        "9339": {
          "id": "9339",
          "nameRu": "Фалеоло",
          "nameEn": "Faleolo",
          "codeSirena": "APW",
          "codeIata": "APW",
          "city": {
            "id": "3409",
            "type": "CITY"
          }
        },
        "9377": {
          "id": "9377",
          "nameRu": "Даунтаун",
          "nameEn": "Downtown",
          "codeSirena": null,
          "codeIata": "AHD",
          "city": {
            "id": "3454",
            "type": "CITY"
          }
        },
        "9378": {
          "id": "9378",
          "nameRu": "Муниципальный",
          "nameEn": "Municipal",
          "codeSirena": null,
          "codeIata": "ADM",
          "city": {
            "id": "3454",
            "type": "CITY"
          }
        },
        "9385": {
          "id": "9385",
          "nameRu": "Чакаллута",
          "nameEn": "Chacalluta",
          "codeSirena": null,
          "codeIata": "ARI",
          "city": {
            "id": "3463",
            "type": "CITY"
          }
        },
        "9399": {
          "id": "9399",
          "nameRu": "Улава",
          "nameEn": "Ulawa",
          "codeSirena": null,
          "codeIata": "RNA",
          "city": {
            "id": "3484",
            "type": "CITY"
          }
        },
        "9449": {
          "id": "9449",
          "nameRu": "Муакчотт",
          "nameEn": "Mouakchott",
          "codeSirena": null,
          "codeIata": "ATR",
          "city": {
            "id": "3542",
            "type": "CITY"
          }
        },
        "9522": {
          "id": "9522",
          "nameRu": "Коннеллан",
          "nameEn": "Connellan",
          "codeSirena": null,
          "codeIata": "AYQ",
          "city": {
            "id": "3614",
            "type": "CITY"
          }
        },
        "9534": {
          "id": "9534",
          "nameRu": "Остров Баду",
          "nameEn": "Badu Island",
          "codeSirena": null,
          "codeIata": "BDD",
          "city": {
            "id": "3633",
            "type": "CITY"
          }
        },
        "9546": {
          "id": "9546",
          "nameRu": "Лоакан",
          "nameEn": "Loakan",
          "codeSirena": null,
          "codeIata": "BAG",
          "city": {
            "id": "3643",
            "type": "CITY"
          }
        },
        "9595": {
          "id": "9595",
          "nameRu": "Меркез",
          "nameEn": "Merkez",
          "codeSirena": null,
          "codeIata": "MQJ",
          "city": {
            "id": "3692",
            "type": "CITY"
          }
        },
        "9596": {
          "id": "9596",
          "nameRu": "Сепинган",
          "nameEn": "Sepingan",
          "codeSirena": "BPN",
          "codeIata": "BPN",
          "city": {
            "id": "3693",
            "type": "CITY"
          }
        },
        "9600": {
          "id": "9600",
          "nameRu": "Тениенте-Видал",
          "nameEn": "Teniente Vidal",
          "codeSirena": null,
          "codeIata": "BBA",
          "city": {
            "id": "3697",
            "type": "CITY"
          }
        },
        "9603": {
          "id": "9603",
          "nameRu": "Гринбелт",
          "nameEn": "Baltimore Greenbelt T",
          "codeSirena": null,
          "codeIata": "GBO",
          "city": {
            "id": "3700",
            "type": "CITY"
          }
        },
        "9604": {
          "id": "9604",
          "nameRu": "Гленн Мартин",
          "nameEn": "Glenn L Martin",
          "codeSirena": null,
          "codeIata": "MTN",
          "city": {
            "id": "3700",
            "type": "CITY"
          }
        },
        "9609": {
          "id": "9609",
          "nameRu": "Бамако Сену",
          "nameEn": "Bamako Senou",
          "codeSirena": "BKO",
          "codeIata": "BKO",
          "city": {
            "id": "3705",
            "type": "CITY"
          }
        },
        "9619": {
          "id": "9619",
          "nameRu": "Удорн",
          "nameEn": "Udorn",
          "codeSirena": null,
          "codeIata": "BAO",
          "city": {
            "id": "3716",
            "type": "CITY"
          }
        },
        "9638": {
          "id": "9638",
          "nameRu": "Ислер-Филд",
          "nameEn": "Esler Field",
          "codeSirena": null,
          "codeIata": "ESF",
          "city": {
            "id": "3215",
            "type": "CITY"
          }
        },
        "9639": {
          "id": "9639",
          "nameRu": "Александрия",
          "nameEn": "International",
          "codeSirena": null,
          "codeIata": "AEX",
          "city": {
            "id": "3215",
            "type": "CITY"
          }
        },
        "9643": {
          "id": "9643",
          "nameRu": "Демокритос",
          "nameEn": "Demokritos",
          "codeSirena": "AXD",
          "codeIata": "AXD",
          "city": {
            "id": "2953",
            "type": "CITY"
          }
        },
        "9646": {
          "id": "9646",
          "nameRu": "Фертилия",
          "nameEn": "Fertilia",
          "codeSirena": "AHO",
          "codeIata": "AHO",
          "city": {
            "id": "3223",
            "type": "CITY"
          }
        },
        "9655": {
          "id": "9655",
          "nameRu": "Гидроаэропорт",
          "nameEn": "Sea Plane Base",
          "codeSirena": null,
          "codeIata": "ALZ",
          "city": {
            "id": "3231",
            "type": "CITY"
          }
        },
        "9657": {
          "id": "9657",
          "nameRu": "Бамраули",
          "nameEn": "Bamrauli",
          "codeSirena": "IXD",
          "codeIata": "IXD",
          "city": {
            "id": "3233",
            "type": "CITY"
          }
        },
        "9724": {
          "id": "9724",
          "nameRu": "Королева Алия",
          "nameEn": "Queen Alia",
          "codeSirena": "АМН",
          "codeIata": "AMM",
          "city": {
            "id": "2035",
            "type": "CITY"
          }
        },
        "9775": {
          "id": "9775",
          "nameRu": "Бри-Шампньер",
          "nameEn": "Brie-Champniers",
          "codeSirena": null,
          "codeIata": "ANG",
          "city": {
            "id": "3354",
            "type": "CITY"
          }
        },
        "9783": {
          "id": "9783",
          "nameRu": "Уани",
          "nameEn": "Ouani",
          "codeSirena": null,
          "codeIata": "AJN",
          "city": {
            "id": "3362",
            "type": "CITY"
          }
        },
        "9789": {
          "id": "9789",
          "nameRu": "Морамба",
          "nameEn": "Moramba",
          "codeSirena": null,
          "codeIata": "WOR",
          "city": {
            "id": "3368",
            "type": "CITY"
          }
        },
        "9791": {
          "id": "9791",
          "nameRu": "Эль-Меллах",
          "nameEn": "Les Salines",
          "codeSirena": null,
          "codeIata": "AAE",
          "city": {
            "id": "3370",
            "type": "CITY"
          }
        },
        "9794": {
          "id": "9794",
          "nameRu": "Ли",
          "nameEn": "Lee",
          "codeSirena": null,
          "codeIata": "ANP",
          "city": {
            "id": "3373",
            "type": "CITY"
          }
        },
        "9801": {
          "id": "9801",
          "nameRu": "108-Майл-Рэнч",
          "nameEn": "108 Mile Ranch",
          "codeSirena": null,
          "codeIata": "ZMH",
          "city": {
            "id": "3029",
            "type": "CITY"
          }
        },
        "9804": {
          "id": "9804",
          "nameRu": "Вигра",
          "nameEn": "Vigra",
          "codeSirena": "AES",
          "codeIata": "AES",
          "city": {
            "id": "3035",
            "type": "CITY"
          }
        },
        "9818": {
          "id": "9818",
          "nameRu": "База ВВС Филлипс",
          "nameEn": "Phillips AAF",
          "codeSirena": null,
          "codeIata": "APG",
          "city": {
            "id": "3054",
            "type": "CITY"
          }
        },
        "9822": {
          "id": "9822",
          "nameRu": "База ВВС Дайесс",
          "nameEn": "Dyess AFB",
          "codeSirena": null,
          "codeIata": "DYS",
          "city": {
            "id": "3059",
            "type": "CITY"
          }
        },
        "9823": {
          "id": "9823",
          "nameRu": "Муниципальный",
          "nameEn": "Municipal",
          "codeSirena": null,
          "codeIata": "ABI",
          "city": {
            "id": "3059",
            "type": "CITY"
          }
        },
        "9830": {
          "id": "9830",
          "nameRu": "Аль-Дафра",
          "nameEn": "Al Dhafra Military",
          "codeSirena": null,
          "codeIata": "DHF",
          "city": {
            "id": "2800",
            "type": "CITY"
          }
        },
        "9846": {
          "id": "9846",
          "nameRu": "Инсирлик",
          "nameEn": "Adana-Incirlik Airbase",
          "codeSirena": null,
          "codeIata": "UAB",
          "city": {
            "id": "3080",
            "type": "CITY"
          }
        },
        "9849": {
          "id": "9849",
          "nameRu": "Боле",
          "nameEn": "Bole",
          "codeSirena": "ADD",
          "codeIata": "ADD",
          "city": {
            "id": "3083",
            "type": "CITY"
          }
        },
        "9853": {
          "id": "9853",
          "nameRu": "Адлер",
          "nameEn": "Adler/Sochi",
          "codeSirena": "СОЧ",
          "codeIata": "AER",
          "city": {
            "id": "1393",
            "type": "CITY"
          }
        },
        "9862": {
          "id": "9862",
          "nameRu": "Алмассира",
          "nameEn": "Agadir Almassira",
          "codeSirena": "AGA",
          "codeIata": "AGA",
          "city": {
            "id": "2642",
            "type": "CITY"
          }
        },
        "9921": {
          "id": "9921",
          "nameRu": "Шариф-Аль-Идрисси",
          "nameEn": "Charif Al Idrissi",
          "codeSirena": null,
          "codeIata": "AHU",
          "city": {
            "id": "3168",
            "type": "CITY"
          }
        },
        "9929": {
          "id": "9929",
          "nameRu": "База ВВС Холломэн",
          "nameEn": "Holloman AFB",
          "codeSirena": null,
          "codeIata": "HMN",
          "city": {
            "id": "3178",
            "type": "CITY"
          }
        },
        "9930": {
          "id": "9930",
          "nameRu": "Муниципальный",
          "nameEn": "Municipal",
          "codeSirena": null,
          "codeIata": "ALM",
          "city": {
            "id": "3178",
            "type": "CITY"
          }
        },
        "9932": {
          "id": "9932",
          "nameRu": "Муниципальный",
          "nameEn": "Municipal",
          "codeSirena": null,
          "codeIata": "ALS",
          "city": {
            "id": "3180",
            "type": "CITY"
          }
        },
        "9954": {
          "id": "9954",
          "nameRu": "Неджраб",
          "nameEn": "Nejrab",
          "codeSirena": "АЛП",
          "codeIata": "ALP",
          "city": {
            "id": "1989",
            "type": "CITY"
          }
        },
        "9958": {
          "id": "9958",
          "nameRu": "Кортдоорн",
          "nameEn": "Kortdoorn",
          "codeSirena": null,
          "codeIata": "ALJ",
          "city": {
            "id": "3212",
            "type": "CITY"
          }
        },
        "9959": {
          "id": "9959",
          "nameRu": "Томас Си Расселл",
          "nameEn": "Thomas C Russell Field",
          "codeSirena": null,
          "codeIata": "ALX",
          "city": {
            "id": "3213",
            "type": "CITY"
          }
        },
        "9961": {
          "id": "9961",
          "nameRu": "Борг-эль-араб",
          "nameEn": "Borg El Arab",
          "codeSirena": null,
          "codeIata": "HBE",
          "city": {
            "id": "2968",
            "type": "CITY"
          }
        },
        "9962": {
          "id": "9962",
          "nameRu": "Эль-Ноца",
          "nameEn": "El Nohza",
          "codeSirena": "ALY",
          "codeIata": "ALY",
          "city": {
            "id": "2968",
            "type": "CITY"
          }
        },
        "9965": {
          "id": "9965",
          "nameRu": "Банги M&rsquo;Поко",
          "nameEn": "Bangui M?Poko",
          "codeSirena": "BGF",
          "codeIata": "BGF",
          "city": {
            "id": "3737",
            "type": "CITY"
          }
        },
        "10060": {
          "id": "10060",
          "nameRu": "Инглиш-Мадейра",
          "nameEn": "English Madeira",
          "codeSirena": null,
          "codeIata": "BCH",
          "city": {
            "id": "3840",
            "type": "CITY"
          }
        },
        "10067": {
          "id": "10067",
          "nameRu": "К.М. де Кеспедес",
          "nameEn": "C.M. de Cespedes",
          "codeSirena": null,
          "codeIata": "BYM",
          "city": {
            "id": "3848",
            "type": "CITY"
          }
        },
        "10071": {
          "id": "10071",
          "nameRu": "Остров Базаруто",
          "nameEn": "Bazaruto Island",
          "codeSirena": null,
          "codeIata": "BZB",
          "city": {
            "id": "3853",
            "type": "CITY"
          }
        },
        "10080": {
          "id": "10080",
          "nameRu": "Бомонт",
          "nameEn": "Beaumont Muni",
          "codeSirena": null,
          "codeIata": "BMT",
          "city": {
            "id": "3863",
            "type": "CITY"
          }
        },
        "10081": {
          "id": "10081",
          "nameRu": "Джефферсон",
          "nameEn": "Jefferson County",
          "codeSirena": null,
          "codeIata": "BPT",
          "city": {
            "id": "3863",
            "type": "CITY"
          }
        },
        "10110": {
          "id": "10110",
          "nameRu": "Вал-Де-Канс",
          "nameEn": "Val De Cans",
          "codeSirena": null,
          "codeIata": "BEL",
          "city": {
            "id": "3897",
            "type": "CITY"
          }
        },
        "10111": {
          "id": "10111",
          "nameRu": "Остров Белеп",
          "nameEn": "Belep Island",
          "codeSirena": null,
          "codeIata": "BMY",
          "city": {
            "id": "3898",
            "type": "CITY"
          }
        },
        "10129": {
          "id": "10129",
          "nameRu": "Южный гидроаэропорт",
          "nameEn": "Southern Seaplane Base",
          "codeSirena": null,
          "codeIata": "BCS",
          "city": {
            "id": "3912",
            "type": "CITY"
          }
        },
        "10130": {
          "id": "10130",
          "nameRu": "Скотт",
          "nameEn": "Belleville",
          "codeSirena": null,
          "codeIata": "BLV",
          "city": {
            "id": "3915",
            "type": "CITY"
          }
        },
        "10134": {
          "id": "10134",
          "nameRu": "Монмаут",
          "nameEn": "Monmouth County",
          "codeSirena": null,
          "codeIata": "BLM",
          "city": {
            "id": "3921",
            "type": "CITY"
          }
        },
        "10139": {
          "id": "10139",
          "nameRu": "Карлос Друммонд де Андраде",
          "nameEn": "Carlos Drummond de Andrade ",
          "codeSirena": null,
          "codeIata": "PLU",
          "city": {
            "id": "3926",
            "type": "CITY"
          }
        },
        "10154": {
          "id": "10154",
          "nameRu": "Остров Бенгуера",
          "nameEn": "Benguera Island",
          "codeSirena": null,
          "codeIata": "BCW",
          "city": {
            "id": "3943",
            "type": "CITY"
          }
        },
        "10173": {
          "id": "10173",
          "nameRu": "Флесланд",
          "nameEn": "Flesland",
          "codeSirena": "BGO",
          "codeIata": "BGO",
          "city": {
            "id": "3964",
            "type": "CITY"
          }
        },
        "10209": {
          "id": "10209",
          "nameRu": "Мокмер",
          "nameEn": "Mokmer",
          "codeSirena": "BIK",
          "codeIata": "BIK",
          "city": {
            "id": "4012",
            "type": "CITY"
          }
        },
        "10339": {
          "id": "10339",
          "nameRu": "Гульельмо Маркони",
          "nameEn": "Guglielmo Marconi",
          "codeSirena": "БОЯ",
          "codeIata": "BLQ",
          "city": {
            "id": "2865",
            "type": "CITY"
          }
        },
        "10359": {
          "id": "10359",
          "nameRu": "Моту-Муту",
          "nameEn": "Motu-mute",
          "codeSirena": "BOB",
          "codeIata": "BOB",
          "city": {
            "id": "4168",
            "type": "CITY"
          }
        },
        "10498": {
          "id": "10498",
          "nameRu": "Хорхе Ньюбери",
          "nameEn": "Jorge Newbery",
          "codeSirena": "AEP",
          "codeIata": "AEP",
          "city": {
            "id": "4345",
            "type": "CITY"
          }
        },
        "10510": {
          "id": "10510",
          "nameRu": "Каменбе",
          "nameEn": "Kamenbe",
          "codeSirena": null,
          "codeIata": "BKY",
          "city": {
            "id": "4355",
            "type": "CITY"
          }
        },
        "10553": {
          "id": "10553",
          "nameRu": "Бусан Гимхе",
          "nameEn": "Busan Gimhae",
          "codeSirena": "ПУС",
          "codeIata": "PUS",
          "city": {
            "id": "2765",
            "type": "CITY"
          }
        },
        "10562": {
          "id": "10562",
          "nameRu": "Грэм",
          "nameEn": "Graham Field",
          "codeSirena": null,
          "codeIata": "BTP",
          "city": {
            "id": "4407",
            "type": "CITY"
          }
        },
        "10583": {
          "id": "10583",
          "nameRu": "Карпике",
          "nameEn": "Carpiquet",
          "codeSirena": "CFR",
          "codeIata": "CFR",
          "city": {
            "id": "4434",
            "type": "CITY"
          }
        },
        "10714": {
          "id": "10714",
          "nameRu": "Рафаэль Нунец",
          "nameEn": "Rafael Nunez",
          "codeSirena": "CTG",
          "codeIata": "CTG",
          "city": {
            "id": "4579",
            "type": "CITY"
          }
        },
        "10752": {
          "id": "10752",
          "nameRu": "Годофредо П. Рамос",
          "nameEn": "Godofredo P. Ramos",
          "codeSirena": "MPH",
          "codeIata": "MPH",
          "city": {
            "id": "4619",
            "type": "CITY"
          }
        },
        "11047": {
          "id": "11047",
          "nameRu": "База МакИнтайр",
          "nameEn": "McEntire ANG Base",
          "codeSirena": null,
          "codeIata": "MMT",
          "city": {
            "id": "4930",
            "type": "CITY"
          }
        },
        "11048": {
          "id": "11048",
          "nameRu": "Метрополитан",
          "nameEn": "Metropolitan",
          "codeSirena": "CAE",
          "codeIata": "CAE",
          "city": {
            "id": "4930",
            "type": "CITY"
          }
        },
        "11049": {
          "id": "11049",
          "nameRu": "Оуэнс",
          "nameEn": "Owens Field",
          "codeSirena": null,
          "codeIata": "CUB",
          "city": {
            "id": "4930",
            "type": "CITY"
          }
        },
        "11630": {
          "id": "11630",
          "nameRu": "Лядовены",
          "nameEn": "Lyadoveny",
          "codeSirena": "БЦЫ",
          "codeIata": "BYZ",
          "city": {
            "id": "797",
            "type": "CITY"
          }
        }
      },
      "AIRLINE": {},
      "VEHICLE": {},
      "AIR_PERSON_CATEGORY": {}
    };
    localStorage.setItem('references', JSON.stringify(referenceData));
  }
  responce = JSON.parse(localStorage.getItem('references'));
  DictionaryModel = Backbone.Model.extend({
    defaults: {
      airport: new Backbone.Model(responce.AIRPORT),
      country: new Backbone.Model(responce.COUNTRY),
      city: new Backbone.Model(responce.CITY)
    }
  });
  dictionaryModel = new DictionaryModel;
  SearchesModel = Backbone.Model.extend({
    defaults: {
      searchResultId: void 0,
      deepLink: void 0,
      request: void 0,
      bestBefore: void 0,
      searchDate: void 0
    }
  });
  SearchesCollection = Backbone.Collection.extend({
    model: SearchesModel,
    initialize: function() {
      return this.on('add', this.saveToStorage);
    },
    saveToStorage: function() {
      var model, _i, _len, _ref, _results;
      _ref = this.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        model = _ref[_i];
        _results.push(model.save());
      }
      return _results;
    }
  });
  searchesCollection = new SearchesCollection;
  searchesCollection.localStorage = new Backbone.LocalStorage("searches");
  searchesCollection.fetch();
  if (!localStorage.getItem('searches')) {
    searchesCollection.add([
      {
        "searchResultId": "0000-OSPP-a90d0b7c-a67c-4c77-b776-118426c4a17e",
        "deepLink": "MOW-AER:2013-10-21|flexible",
        "request": {
          "segments": [
            {
              "startPoint": {
                "id": "1",
                "type": "CITY"
              },
              "endPoint": {
                "id": "1393",
                "type": "CITY"
              },
              "startDate": "2013-10-21"
            }
          ],
          "persons": [
            {
              "airCategory": {
                "id": "1",
                "type": "AIR_PERSON_CATEGORY"
              }
            }
          ],
          "airTripPreferences": {
            "serviceClass": {
              "id": 1,
              "type": "AIR_SERVICE_CLASS"
            },
            "datesRange": {
              "id": 1002,
              "type": "AIR_DATES_RANGE"
            }
          },
          "currency": {
            "id": 643,
            "type": "CURRENCY"
          }
        },
        "bestBefore": "2013-10-17T18:39:05+04:00",
        "searchDate": "2013-10-17T15:39:35.621+04:00"
      }, {
        "searchResultId": "0000-OSPP-32eabc54-5712-480c-8e90-3cfb17a858e4",
        "deepLink": "MOW-AER:2013-10-22|AER-MOW:2013-11-23",
        "request": {
          "segments": [
            {
              "startPoint": {
                "id": "1",
                "type": "CITY"
              },
              "endPoint": {
                "id": "1393",
                "type": "CITY"
              },
              "startDate": "2013-10-22"
            }, {
              "startPoint": {
                "id": "1393",
                "type": "CITY"
              },
              "endPoint": {
                "id": "1",
                "type": "CITY"
              },
              "startDate": "2013-11-23"
            }
          ],
          "persons": [
            {
              "airCategory": {
                "id": "1",
                "type": "AIR_PERSON_CATEGORY"
              }
            }
          ],
          "airTripPreferences": {
            "serviceClass": {
              "id": 1,
              "type": "AIR_SERVICE_CLASS"
            }
          },
          "currency": {
            "id": 643,
            "type": "CURRENCY"
          }
        },
        "bestBefore": "2013-10-22T16:24:03+04:00",
        "searchDate": "2013-10-22T13:24:33.513+04:00"
      }, {
        "searchResultId": "0000-OSPP-bebb9925-719e-416c-98db-cb74acc8123c",
        "deepLink": "MOW-AER:2013-10-22|AER-LED:2013-11-04|LED-MOW:2013-12-02",
        "request": {
          "segments": [
            {
              "startPoint": {
                "id": "1",
                "type": "CITY"
              },
              "endPoint": {
                "id": "1393",
                "type": "CITY"
              },
              "startDate": "2013-10-22"
            }, {
              "startPoint": {
                "id": "1393",
                "type": "CITY"
              },
              "endPoint": {
                "id": "21",
                "type": "CITY"
              },
              "startDate": "2013-11-04"
            }, {
              "startPoint": {
                "id": "21",
                "type": "CITY"
              },
              "endPoint": {
                "id": "1",
                "type": "CITY"
              },
              "startDate": "2013-12-02"
            }
          ],
          "persons": [
            {
              "airCategory": {
                "id": "1",
                "type": "AIR_PERSON_CATEGORY"
              }
            }
          ],
          "airTripPreferences": {
            "serviceClass": {
              "id": 1,
              "type": "AIR_SERVICE_CLASS"
            }
          },
          "currency": {
            "id": 643,
            "type": "CURRENCY"
          }
        },
        "bestBefore": "2013-10-22T20:06:27+04:00",
        "searchDate": "2013-10-22T17:06:57.486+04:00"
      }
    ]);
  }
  FlightItemModel = Backbone.Model.extend({
    defaults: {
      controlType: 'linkControl',
      url: '#!/',
      text: void 0,
      date: void 0,
      plusMinus: false
    }
  });
  FlightItemCollection = Backbone.Collection.extend({
    model: FlightItemModel,
    initialize: function() {
      this.searches = searchesCollection;
      this.dictionary = dictionaryModel;
      return this.addItems();
    },
    addItems: function() {
      var model, _i, _len, _ref, _results;
      _ref = this.searches.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        model = _ref[_i];
        _results.push(this.add(this.convertModelToItem(model)));
      }
      return _results;
    },
    convertModelToItem: function(model) {
      var itemUrl, requestData;
      itemUrl = model.get('deepLink');
      requestData = model.get('request');
      return this.createItem(requestData, itemUrl);
    },
    checkItemFligthType: function(requestData) {
      var result, typs;
      result = false;
      typs = ['singleFlight', 'singleFligthPair', 'multiFlight', 'multiFlightPair'];
      if (this.checkSingleFlightType(requestData)) {
        result = typs[0];
      }
      if (this.checkSingleFligthPairType(requestData)) {
        result = typs[1];
      }
      if (this.checkMultiFlightType(requestData)) {
        result = typs[2];
      }
      return result;
    },
    checkSingleFlightType: function(requestData) {
      if (requestData.segments.length === 1) {
        return true;
      } else {
        return false;
      }
    },
    checkSingleFligthPairType: function(requestData) {
      var segment1, segment2, state;
      state = false;
      if (requestData.segments.length === 2) {
        segment1 = {
          title: this.getSegmentPointTitle(requestData.segments[0]),
          date: this.getSegmentPointDate(requestData.segments[0])
        };
        segment2 = {
          title: this.getSegmentPointTitle(requestData.segments[1]),
          date: this.getSegmentPointDate(requestData.segments[1])
        };
        if (segment1.title.end === segment2.title.start && segment2.title.start === segment1.title.end) {
          if (!segment1.date.end && !segment2.date.end) {
            if (segment1.date.start.date < segment2.date.start.date) {
              this.pair = [segment1, segment2];
              state = true;
            }
          }
        }
      }
      return state;
    },
    checkMultiFlightType: function(requestData) {
      var otherItem, segment, segmentItem, segmentItems, state, _i, _j, _k, _len, _len1, _len2, _ref;
      state = false;
      if (requestData.segments.length > 2) {
        this.pair = [];
        segmentItems = [];
        _ref = requestData.segments;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          segment = _ref[_i];
          segmentItems.push({
            title: this.getSegmentPointTitle(segment),
            date: this.getSegmentPointDate(segment)
          });
        }
        for (_j = 0, _len1 = segmentItems.length; _j < _len1; _j++) {
          segmentItem = segmentItems[_j];
          for (_k = 0, _len2 = segmentItems.length; _k < _len2; _k++) {
            otherItem = segmentItems[_k];
            if (segmentItem.title.end === otherItem.title.start) {
              if (!segmentItem.date.end && !otherItem.date.end) {
                if (segmentItem.date.start.date < otherItem.date.start.date) {
                  this.pair.push([segmentItem, otherItem]);
                  state = true;
                }
              }
            }
          }
        }
      }
      return state;
    },
    createItem: function(requestData, itemUrl) {
      var firstSegmentDate, item, itemDate, itemEl, itemProp, itemTitle, obj, pair, segment, segment1, segment2, _i, _j, _len, _len1;
      itemTitle = '';
      itemDate = '';
      switch (this.checkItemFligthType(requestData)) {
        case "singleFlight":
          segment = requestData.segments[0];
          itemTitle = this.getSegmentPointTitle(segment);
          itemDate = this.getSegmentPointDate(segment);
          item = {
            text: itemTitle.start + ' — ' + itemTitle.end,
            date: itemDate.start.day + ' ' + itemDate.start.strMonth,
            url: itemUrl,
            plusMinus: this.checkFlexibleMode(itemUrl)
          };
          break;
        case "singleFligthPair":
          segment1 = this.pair[0];
          segment2 = this.pair[1];
          itemTitle = segment1.title.start + ' — ' + segment2.title.start;
          firstSegmentDate = segment1.date.start.day + (segment1.date.start.month !== segment2.date.start.month ? ' ' + segment1.date.start.strMonth : '');
          itemDate = firstSegmentDate + ' — ' + segment2.date.start.day + ' ' + segment2.date.start.strMonth;
          item = {
            text: itemTitle,
            date: itemDate,
            url: itemUrl,
            plusMinus: this.checkFlexibleMode(itemUrl)
          };
          break;
        case "multiFlight":
          itemProp = [];
          for (pair in this.pair) {
            for (obj in this.pair[pair]) {
              if (!(Number(pair) > 0 && Number(obj) === 0)) {
                itemProp.push({
                  title: this.pair[pair][obj].title.startAbbr,
                  date: this.pair[pair][obj].date.start.day + ' ' + this.pair[pair][obj].date.start.strMonth
                });
              }
            }
          }
          for (_i = 0, _len = itemProp.length; _i < _len; _i++) {
            itemEl = itemProp[_i];
            itemTitle += itemEl.title + ' — ';
          }
          itemTitle += this.pair[this.pair.length - 1][this.pair[this.pair.length - 1].length - 1].title.endAbbr;
          for (_j = 0, _len1 = itemProp.length; _j < _len1; _j++) {
            itemEl = itemProp[_j];
            itemDate += itemEl.date + ', ';
          }
          itemDate = itemDate.substring(0, itemDate.length - 2);
          item = {
            text: itemTitle,
            date: itemDate,
            url: itemUrl,
            plusMinus: this.checkFlexibleMode(itemUrl)
          };
      }
      return item;
    },
    checkFlexibleMode: function(sUrl) {
      var regexp;
      regexp = /flexible/g;
      return regexp.test(sUrl);
    },
    getSegmentId: function(segment) {
      var type;
      return type = {
        start: Number(segment.startPoint.id),
        end: Number(segment.endPoint.id)
      };
    },
    getSegmentType: function(segment) {
      var type;
      return type = {
        start: String(segment.startPoint.type).toLowerCase(),
        end: String(segment.endPoint.type).toLowerCase()
      };
    },
    getSegmentPointTitle: function(segment) {
      var type;
      return type = {
        start: this.dictionary.get(this.getSegmentType(segment).start).get(this.getSegmentId(segment).start).nameRu,
        startAbbr: this.dictionary.get(this.getSegmentType(segment).start).get(this.getSegmentId(segment).start).codeIata,
        end: this.dictionary.get(this.getSegmentType(segment).end).get(this.getSegmentId(segment).end).nameRu,
        endAbbr: this.dictionary.get(this.getSegmentType(segment).end).get(this.getSegmentId(segment).end).codeIata
      };
    },
    getSegmentPointDate: function(segment) {
      var date;
      return date = {
        start: segment.startDate != null ? this.getSegmentPointDateObj(segment.startDate) : false,
        end: segment.endDate != null ? this.getSegmentPointDateObj(segment.endDate) : false
      };
    },
    getSegmentPointDateObj: function(segmentDate) {
      var date, monthAbbr;
      date = new Date(segmentDate);
      monthAbbr = ['янв', 'фев', 'мрт', 'апр', 'май', 'июн', 'июл', 'авг', 'снт', 'окт', 'ноя', 'дек'];
      return {
        date: date,
        day: date.getDate(),
        month: date.getMonth(),
        strMonth: monthAbbr[date.getMonth()],
        year: date.getFullYear()
      };
    }
  });
  flightItemCollection = new FlightItemCollection;
  flightSearchHistoryModel = new Backbone.Model({
    items: flightItemCollection,
    className: "flightSearchHistory__listWrapper"
  });
  favoriteModel = new Backbone.Model({
    url: "#!/favorite/",
    count: 0
  });
  return declaration = {
    componentItems: [
      {
        controlType: "linkFavoriteSearchControl",
        controlModel: favoriteModel
      }, {
        controlType: "flightSearchHistoryBarControl",
        controlModel: flightSearchHistoryModel
      }
    ]
  };
});
