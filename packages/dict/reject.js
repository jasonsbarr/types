import { curry } from "@jasonsbarr/functional-core/functions/lambda/curry.js";
import { create } from "@jasonsbarr/functional-core/functions/object/create.js";
import { entries } from "@jasonsbarr/functional-core/functions/object/entries.js";

export const reject = curry((pred, dict) => {
  let result = create(null);
  for (let [k, v] of entries(dict)) {
    if (!pred(v, k)) {
      result[k] = v;
    }
  }
  return result;
});
