import { assign } from "../functions/object/assign.js";
import { definePropWithOpts } from "../functions/object/definePropWithOpts.js";
import { freeze } from "../functions/object/freeze.js";

/**
 * @typedef {Object} VariantInfo The info used to construct a type variant
 * @property {string} variantName The name of the variant
 * @property {Array} typeClasses An array of typeClass objects with default method implementations
 * @property {Object} overrides An object of methods that override or supplement the default methods
 * @property {Object} statics Static methods to attach to the variant constructor, often used with single-variant types
 * @property {Array} statics.sTypeClasses Array of typeclasses the constructor itself must implement
 * @property {Object} statics.methods Static methods to attach to the constructor
 */
export const VariantInfo = (
  variantName,
  typeClasses = [],
  overrides = {},
  { sTypeClasses = [], methods = {} } = {}
) => ({
  variantName,
  typeClasses,
  overrides,
  statics: { sTypeClasses, methods },
});

/**
 * Creates a variant constructor from a VariantInfo object
 *
 * The variant can hold any value, including another type variant instance
 *
 * @param {String} typeName The name of the type representative
 * @param {VariantInfo} variantInfo The information used to create the variant
 * @returns {Object} The constructed variant instance
 */
const createVariantConstructor = (typeName, variantInfo) => {
  let variantConstructor = (value) => {
    let variant = {
      type: typeName,
      variant: variantInfo.variantName,
      _value: undefined,
      get value() {
        return this._value;
      },
    };

    for (let className of variantInfo.typeClasses) {
      variant = assign(variant, className);
    }

    variant["is" + variantInfo.variantName] = () => true;

    variant = assign(variant, variantInfo.overrides);

    definePropWithOpts("_value", variant, {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

    definePropWithOpts("constructor", variant, {
      enumerable: false,
      writable: false,
      configurable: false,
      value: variantConstructor,
    });

    freeze(variant);

    return variant;
  };

  // assign statics to constructor
  for (let className of variantInfo.statics.sTypeClasses) {
    variantConstructor = assign(variantConstructor, className);
  }

  variantConstructor = assign(variantConstructor, variantInfo.statics.methods);

  return variantConstructor;
};

/**
 * Creates a tagged union type with variants
 *
 * All types will be created as an object that serves as the type representative,
 * and all variants will get constructor functions as methods on that object.
 * Constructors will return an object that contains the type name, the variant name,
 * the value held "inside" the type (which can be anything, including an instance
 * of another type), and any methods defined in the variants info.
 *
 * @param {String} typeName The name of the type
 * @param {VariantInfo[]} variantInfos Info used to create variants
 * @param {Array} typeClasses An array of type classes to apply to the type representative
 * @param {Object} overrides Method overrides and additional method definitions for the type representative
 * @returns {Object} The created type representative object
 */
export const createType = (
  typeName,
  variantInfos,
  typeClasses = [],
  overrides = {}
) => {
  let typeRepresentative = {
    type: typeName,
    variants: [],
  };

  for (let info of variantInfos) {
    typeRepresentative[info.variantName] = createVariantConstructor(
      typeName,
      info
    );
    typeRepresentative.variants.push(info.variantName);
  }

  for (let className of typeClasses) {
    typeRepresentative = assign(typeRepresentative, className);
  }

  assign(typeRepresentative, overrides);

  return typeRepresentative;
};
