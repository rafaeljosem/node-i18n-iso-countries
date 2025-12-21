import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(pathToFileURL("./test/json-import-loader.js"), pathToFileURL("./"));
