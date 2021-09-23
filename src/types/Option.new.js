import { ifElse } from "../functions/helpers/ifElse.js";
import { isNullish } from "../functions/predicates/isNullish.js";
import { VariantInfo, createType } from "./createType.js";
import {
  Alt,
  Applicative,
  Apply,
  Bifunctor,
  Functor,
  LeftAlt,
  LeftApply,
  LeftBifunctor,
  LeftClass,
  LeftFold,
  LeftFunctor,
  LeftMonad,
  LeftSemiGroup,
  Monad,
  Monoid,
  RightClass,
  RightFold,
  RightSemiGroup,
} from "./typeClasses.js";

const variantInfos = [
  VariantInfo("Some", [
    RightClass,
    RightFold,
    Functor,
    Apply,
    Monad,
    Bifunctor,
    Alt,
    RightSemiGroup,
  ]),
  VariantInfo("None", [
    LeftClass,
    LeftFold,
    LeftFunctor,
    LeftApply,
    LeftMonad,
    LeftBifunctor,
    LeftAlt,
    LeftSemiGroup,
  ]),
];

export const Option = createType(
  "Option",
  variantInfos,
  [Monoid, Applicative],
  {
    of(x) {
      return isNullish(x) ? Option.None(x) : Option.Some(x);
    },

    empty() {
      return Option.None(null);
    },
  }
);

const { Some, None } = Option;
export { Some };
export { None };

export const safe = (pred) => ifElse(pred, Option.Some, Option.None);