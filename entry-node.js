import { createRequire } from "module";
const require = createRequire(import.meta.url);

import * as library from "./index.js";
import { getSupportedLanguages, registerLocale } from "./index.js";

const supportedLocales = getSupportedLanguages();

supportedLocales.forEach((code) => {
  const locale = require(`./langs/${code}.json`);
  registerLocale(locale);
});

export * from "./index.js";
export default library;
