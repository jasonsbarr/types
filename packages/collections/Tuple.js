import { all } from "@jasonsbarr/functional-core/functions/iterable/all.js";
import { any } from "@jasonsbarr/functional-core/functions/iterable/any.js";
import { ap } from "@jasonsbarr/functional-core/functions/iterable/ap.js";
import { append } from "@jasonsbarr/functional-core/functions/iterable/append.js";
import { at } from "@jasonsbarr/functional-core/functions/iterable/at.js";
import { atUnsafe } from "@jasonsbarr/functional-core/functions/iterable/atUnsafe.js";
import { atWithDefault } from "@jasonsbarr/functional-core/functions/iterable/atWithDefault.js";
import { average } from "@jasonsbarr/functional-core/functions/iterable/average.js";
import { chain } from "@jasonsbarr/functional-core/functions/iterable/chain.js";
import { compact } from "@jasonsbarr/functional-core/functions/iterable/compact.js";
import { concat } from "@jasonsbarr/functional-core/functions/iterable/concat.js";
import { concatToArray } from "@jasonsbarr/functional-core/functions/iterable/concatToArray.js";
import { copy } from "@jasonsbarr/functional-core/functions/iterable/copy.js";
import { copyWithin } from "@jasonsbarr/functional-core/functions/iterable/copyWithin.js";
import { count } from "@jasonsbarr/functional-core/functions/iterable/count.js";
import { difference } from "@jasonsbarr/functional-core/functions/iterable/difference.js";
import { each } from "@jasonsbarr/functional-core/functions/iterable/each.js";
import { eachWithIndex } from "@jasonsbarr/functional-core/functions/iterable/eachWithIndex.js";
import { entries } from "@jasonsbarr/functional-core/functions/iterable/entries.js";
import { filter } from "@jasonsbarr/functional-core/functions/iterable/filter.js";
import { find } from "@jasonsbarr/functional-core/functions/iterable/find.js";
import { findIndex } from "@jasonsbarr/functional-core/functions/iterable/findIndex.js";
import { first } from "@jasonsbarr/functional-core/functions/iterable/first.js";
import { flatten } from "@jasonsbarr/functional-core/functions/iterable/flatten.js";
import { freeze } from "@jasonsbarr/functional-core/functions/object/freeze.js";
import { from } from "@jasonsbarr/functional-core/functions/iterable/from.js";
import { includes } from "@jasonsbarr/functional-core/functions/iterable/includes.js";
import { indexOf } from "@jasonsbarr/functional-core/functions/iterable/indexOf.js";
import { insert } from "@jasonsbarr/functional-core/functions/iterable/insert.js";
import { intersection } from "@jasonsbarr/functional-core/functions/iterable/intersection.js";
import { isEmpty } from "@jasonsbarr/functional-core/functions/iterable/isEmpty.js";
import { isEqual } from "@jasonsbarr/functional-core/functions/iterable/isEqual.js";
import { join } from "@jasonsbarr/functional-core/functions/iterable/join.js";
import { keys } from "@jasonsbarr/functional-core/functions/iterable/keys.js";
import { last } from "@jasonsbarr/functional-core/functions/iterable/last.js";
import { lastIndexOf } from "@jasonsbarr/functional-core/functions/iterable/lastIndexOf.js";
import { map } from "@jasonsbarr/functional-core/functions/iterable/map.js";
import { mapWithIndex } from "@jasonsbarr/functional-core/functions/iterable/mapWithIndex.js";
import { max } from "@jasonsbarr/functional-core/functions/iterable/max.js";
import { none } from "@jasonsbarr/functional-core/functions/iterable/none.js";
import { median } from "@jasonsbarr/functional-core/functions/iterable/median.js";
import { min } from "@jasonsbarr/functional-core/functions/iterable/min.js";
import { pluck } from "@jasonsbarr/functional-core/functions/iterable/pluck.js";
import { prepend } from "@jasonsbarr/functional-core/functions/iterable/prepend.js";
import { product } from "@jasonsbarr/functional-core/functions/iterable/product.js";
import { reduce } from "@jasonsbarr/functional-core/functions/iterable/reduce.js";
import { reduceRight } from "@jasonsbarr/functional-core/functions/iterable/reduceRight.js";
import { reject } from "@jasonsbarr/functional-core/functions/iterable/reject.js";
import { remove } from "@jasonsbarr/functional-core/functions/iterable/remove.js";
import { removeAt } from "@jasonsbarr/functional-core/functions/iterable/removeAt.js";
import { reverse } from "@jasonsbarr/functional-core/functions/iterable/reverse.js";
import { sample } from "@jasonsbarr/functional-core/functions/iterable/sample.js";
import { sequence } from "@jasonsbarr/functional-core/functions/iterable/sequence.js";
import { shuffle } from "@jasonsbarr/functional-core/functions/iterable/shuffle.js";
import { slice } from "@jasonsbarr/functional-core/functions/iterable/slice.js";
import { sort } from "@jasonsbarr/functional-core/functions/iterable/sort.js";
import { splice } from "@jasonsbarr/functional-core/functions/iterable/splice.js";
import { sum } from "@jasonsbarr/functional-core/functions/iterable/sum.js";
import { symmetricDifference } from "@jasonsbarr/functional-core/functions/iterable/symmetricDifference.js";
import { to } from "@jasonsbarr/functional-core/functions/iterable/to.js";
import { toArray } from "@jasonsbarr/functional-core/functions/iterable/toArray.js";
import { traverse } from "@jasonsbarr/functional-core/functions/iterable/traverse.js";
import { union } from "@jasonsbarr/functional-core/functions/iterable/union.js";
import { unique } from "@jasonsbarr/functional-core/functions/iterable/unique.js";
import { update } from "@jasonsbarr/functional-core/functions/iterable/update.js";
import { values } from "@jasonsbarr/functional-core/functions/iterable/values.js";
import { zip } from "@jasonsbarr/functional-core/functions/iterable/zip.js";
import { equals } from "@jasonsbarr/functional-core/functions/object/equals.js";

// A tuple is immutable, like in Python.
// Objects inside it, however (not primitives!), can be mutated.
class Tpl extends Array {
  constructor(...args) {
    super(...args);

    Object.defineProperty(this, "type", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: "Tuple",
    });

    Object.defineProperty(this, "constructor", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: Tuple,
    });

    Object.defineProperty(this, "size", {
      configurable: false,
      enumerable: false,
      writable: true,
      value: this.length,
    });

    freeze(this);
  }

  // can use either a fluent method interface or use the iterable functions used here directly
  all(search) {
    return all(search, this);
  }

  any(search) {
    return any(search, this);
  }

  ap(functor) {
    return ap(functor, this);
  }

  append(item) {
    return append(item, this);
  }

  // returns Option, not simple value
  at(i) {
    return at(i, this);
  }

  // unsafe - may return null or undefined value
  atUnsafe(i) {
    return atUnsafe(i, this);
  }

  atWithDefault(i, defaultValue) {
    return atWithDefault(i, defaultValue, this);
  }

  average() {
    return average(this);
  }

  chain(fn) {
    return chain(fn, this);
  }

  clone() {
    return this.copy();
  }

  compact() {
    return compact(this);
  }

  // works with any iterable in this library, but assumption is all args are lists
  concat(...lists) {
    return concat(this, ...lists);
  }

  concatToArray(...lists) {
    return concatToArray(this, ...lists);
  }

  count(search) {
    return count(search, this);
  }

  // makes a shallow copy
  copy() {
    return copy(this);
  }

  copyWithin(target, start, end) {
    return copyWithin(this, target, start, end);
  }

  difference(other) {
    return difference(this, other);
  }

  each(fn) {
    each(fn, this);
  }

  eachWithIndex(fn) {
    eachWithIndex(fn, this);
  }

  empty() {
    return Tuple.empty();
  }

  entries() {
    return entries(this);
  }

  equals(other) {
    return equals(this, other);
  }

  every(pred) {
    return this.all(pred);
  }

  exclude(pred) {
    return this.reject(pred);
  }

  filter(pred) {
    return filter(pred, this);
  }

  // returns Option
  find(pred) {
    return find(pred, this);
  }

  // returns Option
  findIndex(pred) {
    return findIndex(pred, this);
  }

  // returns Option, not value
  first() {
    return first(this);
  }

  flat(level = Infinity) {
    return this.flatten(level);
  }

  flatten(level = Infinity) {
    return flatten(this, level);
  }

  flatMap(fn) {
    return this.chain(fn);
  }

  fold(fn, initial) {
    return this.reduce(fn, initial);
  }

  foldLeft(fn, initial) {
    return this.reduce(fn, initial);
  }

  foldRight(fn, initial) {
    return this.reduceRight(fn, initial);
  }

  forEach(fn) {
    this.eachWithIndex(fn);
  }

  from(i) {
    return from(i, this);
  }

  // returns Option, not value
  get(i) {
    return this.at(i);
  }

  has(value) {
    return this.includes(value);
  }

  includes(value) {
    return includes(value, this);
  }

  // returns Option
  indexOf(value, start = 0) {
    return indexOf(this, value, start);
  }

  insert(item, i) {
    return insert(item, i, this);
  }

  inspect() {
    return this.toString();
  }

  intersection(other) {
    return intersection(this, other);
  }

  isEmpty() {
    return isEmpty(this);
  }

  isEqual(other) {
    return isEqual(this, other);
  }

  isTuple() {
    return true;
  }

  join(sep = "") {
    return join(sep, this);
  }

  keys() {
    return keys(this);
  }

  // returns Option, not value
  last() {
    return last(this);
  }

  // returns Option
  lastIndexOf(value, startIndex = this.size) {
    return lastIndexOf(this, value, startIndex);
  }

  map(fn) {
    return map(fn, this);
  }

  mapWithIndex(fn) {
    return mapWithIndex(fn, this);
  }

  max() {
    return max(this);
  }

  median() {
    return median(this);
  }

  min() {
    return min(this);
  }

  none(search) {
    return none(search, this);
  }

  pluck(numItems) {
    return pluck(this, numItems);
  }

  // returns Option, not value
  pop() {
    return this.last();
  }

  prepend(item) {
    return prepend(item, this);
  }

  product() {
    return product(this);
  }

  // unlike the array method, this does NOT mutate the current object
  push(item) {
    return this.append(item);
  }

  reduce(fn, initial) {
    return reduce(fn, initial, this);
  }

  reduceRight(fn, initial) {
    return reduceRight(fn, initial, this);
  }

  reject(pred) {
    return reject(pred, this);
  }

  remove(search) {
    return remove(search, this);
  }

  removeAt(start, end) {
    return removeAt(this, start, end);
  }

  reverse() {
    return reverse(this);
  }

  sample() {
    return sample(this);
  }

  sequence(point) {
    return sequence(point, this);
  }

  // returns Option, not value
  shift() {
    return this.first();
  }

  shuffle() {
    return shuffle(this);
  }

  slice(start, end, step) {
    return slice(this, start, end, step);
  }

  some(pred) {
    return this.any(pred);
  }

  sort({ key = "", fn = null, reversed = false } = {}) {
    return sort(this, { key, fn, reversed });
  }

  splice(start, deleteCount = 0, ...items) {
    return splice(this, start, deleteCount, ...items);
  }

  sum() {
    return sum(this);
  }

  symmetricDifference(other) {
    return symmetricDifference(this, other);
  }

  take(numItems) {
    return this.pluck(numItems);
  }

  to(index) {
    return to(index, this);
  }

  toArray() {
    return toArray(this);
  }

  toJSON() {
    return JSON.stringify(this.toArray());
  }

  toString() {
    return `Tuple(${super.toString().split(",").join(", ")})`;
  }

  traverse(point, fn) {
    return traverse(point, fn, this);
  }

  union(other) {
    return union(this, other);
  }

  unique() {
    return unique(this);
  }

  // unlike the array method, this does NOT mutate the current object
  unshift(item) {
    return this.prepend(item);
  }

  update(updater, i) {
    return update(updater, i, this);
  }

  values() {
    return values(this);
  }

  // unsafe - may contain null values
  zip(...iters) {
    return zip(this, ...iters);
  }
}

export const Tuple = (...args) => new Tpl(...args);
export const tuple = Tuple;

Tuple.of = (iter) => tuple(...iter);
Tuple.from = Tuple.of;
Tuple.isTuple = (obj) => obj.type === "Tuple";
Tuple.empty = () => Tuple.of([]);