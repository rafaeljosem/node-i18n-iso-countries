import { deepStrictEqual, notStrictEqual, strictEqual } from "assert";
import {
  alpha2ToAlpha3,
  alpha2ToNumeric,
  alpha3ToAlpha2,
  alpha3ToNumeric,
  getAlpha2Code,
  getAlpha2Codes,
  getAlpha3Code,
  getAlpha3Codes,
  getName,
  getNames,
  getNumericCodes,
  getSimpleAlpha2Code,
  getSimpleAlpha3Code,
  isValid,
  langs,
  numericToAlpha2,
  numericToAlpha3,
  registerLocale,
  toAlpha2,
  toAlpha3,
} from "../entry-node.js";

// Manually register locales needed for tests
import de from "../langs/de.json" with { type: "json" };
import el from "../langs/el.json" with { type: "json" };
import en from "../langs/en.json" with { type: "json" };
import fr from "../langs/fr.json" with { type: "json" };
import id from "../langs/id.json" with { type: "json" };
import mr from "../langs/mr.json" with { type: "json" };
import mt from "../langs/mt.json" with { type: "json" };
import nl from "../langs/nl.json" with { type: "json" };
import pl from "../langs/pl.json" with { type: "json" };
import pt from "../langs/pt.json" with { type: "json" };
import vi from "../langs/vi.json" with { type: "json" };

registerLocale(de);
registerLocale(en);
registerLocale(id);
registerLocale(pl);
registerLocale(el);
registerLocale(fr);
registerLocale(pt);
registerLocale(vi);
registerLocale(mr);
registerLocale(mt);
registerLocale(nl);

describe("i18n for iso 3166-1", function () {
  "use strict";
  describe("Alpha-2 to Alpha-2 code", function () {
    it("toAlpha2 SG => SG", function () {
      strictEqual(toAlpha2("SG"), "SG");
    });
  });
  describe("Alpha-2 to Alpha-3 code", function () {
    it("toAlpha3 true => undefined", function () {
      strictEqual(toAlpha3(true), undefined);
    });
    it("toAlpha3 XX => undefined", function () {
      strictEqual(toAlpha3("XX"), undefined);
    });
    it("toAlpha3 SG => SGP", function () {
      strictEqual(toAlpha3("SG"), "SGP");
    });
    it("alpha2ToAlpha3 SG => SGP", function () {
      strictEqual(alpha2ToAlpha3("SG"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-3 code", function () {
    it("toAlpha2 SGP => SGP", function () {
      strictEqual(toAlpha3("SGP"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-2 code", function () {
    it("toAlpha2 true => undefined", function () {
      strictEqual(toAlpha2(true), undefined);
    });
    it("toAlpha2 XXX => undefined", function () {
      strictEqual(toAlpha2("XXX"), undefined);
    });
    it("toAlpha2 DEU => DE", function () {
      strictEqual(toAlpha2("DEU"), "DE");
    });
    it("alpha3ToAlpha2 DEU => DE", function () {
      strictEqual(alpha3ToAlpha2("DEU"), "DE");
    });
  });
  describe("Alpha-3 to Numeric code", function () {
    it("alpha3ToNumeric SWE => 752", function () {
      strictEqual(alpha3ToNumeric("SWE"), "752");
    });
    it("alpha3ToNumeric DJI => 262", function () {
      strictEqual(alpha3ToNumeric("DJI"), "262");
    });
  });
  describe("Alpha-2 to Numeric code", function () {
    it("alpha2ToNumeric SE => 752", function () {
      strictEqual(alpha2ToNumeric("SE"), "752");
    });
    it("alpha2ToNumeric DJ => 262", function () {
      strictEqual(alpha2ToNumeric("DJ"), "262");
    });
  });
  describe("Numeric to Alpha-2 code", function () {
    it("toAlpha2 '276' => DE", function () {
      strictEqual(toAlpha2("276"), "DE");
    });
    it("toAlpha2 '004' => AF", function () {
      strictEqual(toAlpha2("004"), "AF");
    });
    it("toAlpha2 276 => DE", function () {
      strictEqual(toAlpha2(276), "DE");
    });
    it("toAlpha2 4 => AF", function () {
      strictEqual(toAlpha2(4), "AF");
    });
    it("numericToAlpha2 '276' => DE", function () {
      strictEqual(numericToAlpha2("276"), "DE");
    });
    it("numericToAlpha2 '004' => AF", function () {
      strictEqual(numericToAlpha2("004"), "AF");
    });
    it("numericToAlpha2 276 => DE", function () {
      strictEqual(numericToAlpha2(276), "DE");
    });
    it("numericToAlpha2 4 => AF", function () {
      strictEqual(numericToAlpha2(4), "AF");
    });
  });
  describe("Numeric to Alpha-3 code", function () {
    it("toAlpha3 '276' => DEU", function () {
      strictEqual(toAlpha3("276"), "DEU");
    });
    it("toAlpha3 '004' => AFG", function () {
      strictEqual(toAlpha3("004"), "AFG");
    });
    it("toAlpha3 276 => DEU", function () {
      strictEqual(toAlpha3(276), "DEU");
    });
    it("toAlpha3 4 => DEU", function () {
      strictEqual(toAlpha3(4), "AFG");
    });
    it("numericToAlpha3 '276' => DEU", function () {
      strictEqual(numericToAlpha3("276"), "DEU");
    });
    it("numericToAlpha3 '004' => AFG", function () {
      strictEqual(numericToAlpha3("004"), "AFG");
    });
    it("numericToAlpha3 276 => DEU", function () {
      strictEqual(numericToAlpha3(276), "DEU");
    });
    it("numericToAlpha3 4 => AFG", function () {
      strictEqual(numericToAlpha3(4), "AFG");
    });
  });
  describe("getAlpha2Codes", function () {
    it("length", function () {
      strictEqual(Object.keys(getAlpha2Codes()).length, 250);
    });
  });
  describe("getAlpha3Codes", function () {
    it("length", function () {
      strictEqual(Object.keys(getAlpha3Codes()).length, 250);
    });
  });
  describe("getNumericCodes", function () {
    it("length", function () {
      strictEqual(Object.keys(getNumericCodes()).length, 250);
    });
  });
  describe("getAlpha2Code", function () {
    it("missing name", function () {
      strictEqual(getAlpha2Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      strictEqual(getAlpha2Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getSimpleAlpha2Code", function () {
    it("works", function () {
      strictEqual(getSimpleAlpha2Code("belgie", "nl"), "BE");
      strictEqual(getSimpleAlpha2Code("België", "nl"), "BE");
      strictEqual(getSimpleAlpha2Code("Republic of Korea", "en"), "KR");
      strictEqual(getSimpleAlpha2Code("South Korea", "en"), "KR");
    });
    it("missing name", function () {
      strictEqual(getSimpleAlpha2Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      strictEqual(getSimpleAlpha2Code("Deutschland", "xx"), undefined);
    });
    it("alternative name spellings", function () {
      strictEqual(getSimpleAlpha2Code("Estados Unidos da América", "pt"), "US");
    });
  });
  describe("getAlpha3Code", function () {
    it("missing name", function () {
      strictEqual(getAlpha3Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      strictEqual(getAlpha3Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getSimpleAlpha3Code", function () {
    it("works", function () {
      strictEqual(getSimpleAlpha3Code("belgie", "nl"), "BEL");
      strictEqual(getSimpleAlpha3Code("België", "nl"), "BEL");
    });
    it("missing name", function () {
      strictEqual(getSimpleAlpha3Code("XXX", "de"), undefined);
    });
    it("missing lang", function () {
      strictEqual(getSimpleAlpha3Code("Deutschland", "xx"), undefined);
    });
    it("alternative name spellings", function () {
      strictEqual(
        getSimpleAlpha3Code("Estados Unidos da América", "pt"),
        "USA"
      );
    });
  });
  describe("isValid", function () {
    it("isValid true => false", function () {
      strictEqual(isValid(true), false);
    });
    it("isValid XX => false", function () {
      strictEqual(isValid("XX"), false);
    });
    it("isValid SG => true", function () {
      strictEqual(isValid("SG"), true);
    });
    it("isValid SGP => true", function () {
      strictEqual(isValid("SGP"), true);
    });
    it("isValid 702 => true", function () {
      strictEqual(isValid(702), true);
    });
    it("isValid 999 => false", function () {
      strictEqual(isValid(999), false);
    });
    it("isValid ... => false", function () {
      strictEqual(isValid("..."), false);
    });
    it("isValid is case insensitive", function () {
      strictEqual(isValid("fra"), true);
      strictEqual(isValid("fr"), true);
    });
    it("isValid works with undefined or null", function () {
      strictEqual(isValid(undefined), false);
      strictEqual(isValid(null), false);
    });
  });
  describe("completeness", function () {
    langs().forEach(function (lang) {
      describe(lang + " completeness", function () {
        it("complete (to less)", function () {
          Object.keys(getAlpha2Codes()).forEach(function (code) {
            notStrictEqual(
              getName(code, lang),
              undefined,
              "missing entry for " + code
            );
          });
        });
        it("complete (too much)", function () {
          Object.keys(getNames(lang)).forEach(function (code) {
            notStrictEqual(
              getAlpha2Codes()[code],
              void 0,
              "entry for " + code + " in lang " + lang + " is too much"
            );
          });
        });
      });
    });
  });
  describe("langs", function () {
    describe("de", function () {
      var lang = "de";
      describe("get name", function () {
        it("for de", function () {
          strictEqual(getName("de", lang), "Deutschland");
        });
        it("for cl", function () {
          strictEqual(getName("cl", lang), "Chile");
        });
        it("for CL", function () {
          strictEqual(getName("CL", lang), "Chile");
        });
        it("for cy", function () {
          strictEqual(getName("cy", lang), "Zypern");
        });
        it("for af", function () {
          strictEqual(getName("af", lang), "Afghanistan");
        });
      });
    });
    describe("en", function () {
      var lang = "en";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 United States of America => US", function () {
          strictEqual(getAlpha2Code("United States of America", lang), "US");
        });
        it("nameToAlpha2 United States => US", function () {
          strictEqual(getAlpha2Code("United States", lang), "US");
        });
        it("nameToAlpha2 Brazil => BR", function () {
          strictEqual(getAlpha2Code("Brazil", lang), "BR");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 United States of America => USA", function () {
          strictEqual(getAlpha3Code("United States of America", lang), "USA");
        });
        it("nameToAlpha3 Brazil => BRA", function () {
          strictEqual(getAlpha3Code("Brazil", lang), "BRA");
        });
      });
      describe("get name", function () {
        it("for de", function () {
          strictEqual(getName("de", lang), "Germany");
        });
        it("for cl", function () {
          strictEqual(getName("cl", lang), "Chile");
        });
        it("for CL", function () {
          strictEqual(getName("CL", lang), "Chile");
        });
        it("for cy", function () {
          strictEqual(getName("cy", lang), "Cyprus");
        });
        it("for af", function () {
          strictEqual(getName("af", lang), "Afghanistan");
        });
      });
    });
    describe("id", function () {
      var lang = "id";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 Samoa Amerika => AS", function () {
          strictEqual(getAlpha2Code("Samoa Amerika", lang), "AS");
        });
        it("nameToAlpha2 Brasil => BR", function () {
          strictEqual(getAlpha2Code("Brasil", lang), "BR");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 Samoa Amerika => ASM", function () {
          strictEqual(getAlpha3Code("Samoa Amerika", lang), "ASM");
        });
        it("nameToAlpha3 Brasil => BRA", function () {
          strictEqual(getAlpha3Code("Brasil", lang), "BRA");
        });
      });
      describe("get name", function () {
        it("for de", function () {
          strictEqual(getName("de", lang), "Jerman");
        });
        it("for cl", function () {
          strictEqual(getName("cl", lang), "Chile");
        });
        it("for CL", function () {
          strictEqual(getName("CL", lang), "Chile");
        });
        it("for cy", function () {
          strictEqual(getName("cy", lang), "Siprus");
        });
        it("for af", function () {
          strictEqual(getName("af", lang), "Afghanistan");
        });
      });
    });
    describe("pl", function () {
      var lang = "pl";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 Brazylia => BR", function () {
          strictEqual(getAlpha2Code("Brazylia", lang), "BR");
        });
        it("nameToAlpha2 Stany Zjednoczone => US", function () {
          strictEqual(getAlpha2Code("Stany Zjednoczone", lang), "US");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 Brazylia => BRA", function () {
          strictEqual(getAlpha3Code("Brazylia", lang), "BRA");
        });
        it("nameToAlpha3 Stany Zjednoczone => USA", function () {
          strictEqual(getAlpha3Code("Stany Zjednoczone", lang), "USA");
        });
      });
      describe("get name", function () {
        it("for af => Afganistan", function () {
          strictEqual(getName("af", lang), "Afganistan");
        });
        it("for ba => Bośnia i Hercegowina", function () {
          strictEqual(getName("ba", lang), "Bośnia i Hercegowina");
        });
        it("for cn => Chiny", function () {
          strictEqual(getName("cn", lang), "Chiny");
        });
        it("for cy => Cypr", function () {
          strictEqual(getName("cy", lang), "Cypr");
        });
        it("for de => Niemcy", function () {
          strictEqual(getName("de", lang), "Niemcy");
        });
      });
    });
    describe("el", function () {
      var lang = "el";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 'Βραζιλία' => BR", function () {
          strictEqual(getAlpha2Code("Βραζιλία", lang), "BR");
        });
        it("nameToAlpha2 'Ηνωμένες Πολιτείες Αμερικής' => US", function () {
          strictEqual(getAlpha2Code("Ηνωμένες Πολιτείες Αμερικής", lang), "US");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 'Βραζιλία' => BRA", function () {
          strictEqual(getAlpha3Code("Βραζιλία", lang), "BRA");
        });
        it("nameToAlpha3 'Ηνωμένες Πολιτείες Αμερικής' => USA", function () {
          strictEqual(
            getAlpha3Code("Ηνωμένες Πολιτείες Αμερικής", lang),
            "USA"
          );
        });
      });
      describe("get name", function () {
        it("for af => Αφγανιστάν", function () {
          strictEqual(getName("af", lang), "Αφγανιστάν");
        });
        it("for ba => Βοσνία και Ερζεγοβίνη", function () {
          strictEqual(getName("ba", lang), "Βοσνία και Ερζεγοβίνη");
        });
        it("for cn => Κίνα", function () {
          strictEqual(getName("cn", lang), "Κίνα");
        });
        it("for cy => Κύπρος", function () {
          strictEqual(getName("cy", lang), "Κύπρος");
        });
        it("for de => Γερμανία", function () {
          strictEqual(getName("de", lang), "Γερμανία");
        });
      });
    });
    describe("fr", function () {
      var lang = "fr";
      describe("get name", function () {
        it("for fr => France", function () {
          strictEqual(getName("fr", lang), "France");
        });
      });
    });
    describe("pt", function () {
      var lang = "pt";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 Estados Unidos => US", function () {
          strictEqual(getAlpha2Code("Estados Unidos", lang), "US");
        });
        it("nameToAlpha2 Estados Unidos da América => US", function () {
          strictEqual(getAlpha2Code("Estados Unidos da América", lang), "US");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 Estados Unidos => USA", function () {
          strictEqual(getAlpha3Code("Estados Unidos", lang), "USA");
        });
        it("nameToAlpha3 Estados Unidos da América => USA", function () {
          strictEqual(getAlpha3Code("Estados Unidos da América", lang), "USA");
        });
      });
      describe("get name", function () {
        it("for br => Brasil", function () {
          strictEqual(getName("br", lang), "Brasil");
        });
        it("for si => Eslovénia", function () {
          strictEqual(getName("si", lang), "Eslovénia");
        });
        it("for us => Estados Unidos", function () {
          strictEqual(getName("us", lang), "Estados Unidos");
        });
      });
    });
    describe("vi", function () {
      var lang = "vi";
      describe("get name", function () {
        it("for eg => Ai Cập", function () {
          strictEqual(getName("eg", lang), "Ai Cập");
        });
        it("for eg (official name) => Ai Cập", function () {
          strictEqual(
            getName("eg", lang, {
              select: "official",
            }),
            "Ai Cập"
          );
        });
        it("for ru (alias) => Nga", function () {
          strictEqual(
            getName("ru", lang, {
              select: "alias",
            }),
            "Nga"
          );
        });
        it('for us (all available names) => ["Hợp chủng quốc Hoa Kỳ", "Mỹ"]', function () {
          deepStrictEqual(
            getName("us", lang, {
              select: "all",
            }),
            ["Hợp chủng quốc Hoa Kỳ", "Mỹ"]
          );
        });
      });
    });
    describe("mr", function () {
      var lang = "mr";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 अमेरिका => US", function () {
          strictEqual(getAlpha2Code("अमेरिका", lang), "US");
        });
        it("nameToAlpha2 Brazil => BR", function () {
          strictEqual(getAlpha2Code("ब्राझील", lang), "BR");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 अमेरिका => USA", function () {
          strictEqual(getAlpha3Code("अमेरिका", lang), "USA");
        });
        it("nameToAlpha3 ब्राझील => BRA", function () {
          strictEqual(getAlpha3Code("ब्राझील", lang), "BRA");
        });
      });
      describe("get name", function () {
        it("for de", function () {
          strictEqual(getName("de", lang), "जर्मनी");
        });
        it("for in", function () {
          strictEqual(getName("in", lang), "भारत");
        });
      });
    });
    describe("mt", function () {
      var lang = "mt";
      describe("get Alpha-2 code", function () {
        it("nameToAlpha2 l-Istati Uniti => US", function () {
          strictEqual(getAlpha2Code("l-Istati Uniti", lang), "US");
        });
        it("nameToAlpha2 l-Istati Uniti tal-Amerka => US", function () {
          strictEqual(getAlpha2Code("l-Istati Uniti tal-Amerka", lang), "US");
        });
      });
      describe("get Alpha-3 code", function () {
        it("nameToAlpha3 l-Istati Uniti => USA", function () {
          strictEqual(getAlpha3Code("l-Istati Uniti", lang), "USA");
        });
        it("nameToAlpha3 l-Istati Uniti tal-Amerka => USA", function () {
          strictEqual(getAlpha3Code("l-Istati Uniti tal-Amerka", lang), "USA");
        });
      });
      describe("get name", function () {
        it("for br => Il-Brażil", function () {
          strictEqual(getName("br", lang), "Il-Brażil");
        });
        it("for si => is-Slovenja", function () {
          strictEqual(getName("si", lang), "is-Slovenja");
        });
        it("for us => l-Istati Uniti", function () {
          strictEqual(getName("us", lang), "l-Istati Uniti");
        });
      });
    });
    describe("unsupported language", function () {
      var lang = "unsupported";
      it("get name => undefined", function () {
        strictEqual(getName("de", lang), undefined);
      });
      it("get names => array.length == 0", function () {
        strictEqual(Object.keys(getNames(lang)).length, 0);
      });
    });
  });
});
