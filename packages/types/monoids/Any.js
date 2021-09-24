import {
  VariantInfo,
  createType,
} from "@jasonsbarr/functional-core/functions/type/createType.js";
import {
  Fold,
  Monoid,
  SemiGroup,
  Setoid,
} from "@jasonsbarr/functional-core/types/typeClasses.js";
import { isFunction } from "@jasonsbarr/functional-core/functions/predicates/isFunction.js";
import { boolean } from "@jasonsbarr/functional-core/functions/type/boolean.js";

const variantInfos = [
  VariantInfo(
    "Any",
    [SemiGroup, Setoid, Fold],
    {
      concat({ value: y }) {
        return Any(this.value || y);
      },

      init() {
        this.value = boolean(this.value);
      },
    },
    {
      sTypeClasses: [Monoid],
      methods: {
        empty() {
          return Any(false);
        },

        isAny(x) {
          return x && isFunction(x.isAny) && x.isAny();
        },
      },
    }
  ),
];

export const { Any } = createType("Any", variantInfos);

const a = Any("hi");