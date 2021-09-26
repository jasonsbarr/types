import { VariantInfo, createType } from "./createType.js";
import { isFunction } from "../predicates/isFunction.js";
import {
  RightAlt,
  Applicative,
  Apply,
  Functor,
  Chain,
  Monoid,
  Fold,
  SemiGroup,
} from "./typeClasses.js";

const variantInfos = [
  VariantInfo(
    "Id",
    [Fold, Functor, Apply, Chain, RightAlt, SemiGroup],
    {},
    {
      sTypeClasses: [Monoid, Applicative],
      methods: {
        of(x) {
          return Id(x);
        },

        empty() {
          return Id();
        },

        isId(x) {
          return x && isFunction(x.isId) && x.isId();
        },

        variants: ["Id"],
      },
    }
  ),
];

export const { Id } = createType("Identity", variantInfos);
