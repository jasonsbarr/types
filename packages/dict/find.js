import { None, Some } from "@jasonsbarr/functional-core/types/Option.js";
import { curry } from "@jasonsbarr/functional-core/functions/lambda/curry.js";
import { entries } from "@jasonsbarr/functional-core/functions/object/entries.js";

export const find = curry((pred, dict) => {
  for (let [k, v] of entries(dict)) {
    if (pred(v, k)) {
      return Some(v);
    }
  }
  return None(null);
});
