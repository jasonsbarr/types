import { curry } from "@jasonsbarr/functional-core/functions/lambda/curry.js";
import { entries } from "@jasonsbarr/functional-core/functions/object/entries.js";
import { equals } from "@jasonsbarr/functional-core/functions/object/equals.js";
import { isFunction } from "@jasonsbarr/functional-core/functions/predicates/isFunction.js";
import { isRegExp } from "@jasonsbarr/functional-core/functions/predicates/isRegExp.js";

export const none = curry((search, dict) => {
  for (let [_, v] of entries(dict)) {
    if (isFunction(search)) {
      if (search(v)) return false;
    } else if (isRegExp(search)) {
      if (search.test(v)) return false;
    } else {
      if (equals(search, v)) return false;
    }
  }
  return true;
});
