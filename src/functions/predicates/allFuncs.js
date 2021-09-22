import { reduce } from "./reduce.js";
import { isFunction } from "../lambda/isFunction.js";

export const allFuncs = (xs) => reduce((b, x) => b && isFunction(x), true, xs);