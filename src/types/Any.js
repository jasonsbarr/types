import { VariantInfo, createType } from "./createType.js";
import { Fold, Monoid, SemiGroup, Setoid } from "./typeClasses.js";
import { isFunction } from "../functions/predicates/isFunction.js";

const variantInfos = [
  VariantInfo(
    "Any",
    [SemiGroup, Setoid, Fold],
    {
      concat({ value: y }) {
        return Any(this.value || y);
      },

      inspect() {
        return `Any(${this.value})`;
      },
    },
    {
      sTypeClasses: [Monoid],
      methods: {
        empty() {
          return Any(false);
        },

        isAny(x) {
          return isFunction(x.isAny) && x.isAny();
        },
      },
    }
  ),
];

export const { Any } = createType("Any", variantInfos);
