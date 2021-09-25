import { all } from "@jasonsbarr/iterable/lib/all.js";
import { any } from "@jasonsbarr/iterable/lib/any.js";
import { ap } from "@jasonsbarr/iterable/lib/ap.js";
import { append } from "@jasonsbarr/iterable/lib/append.js";
import { at } from "@jasonsbarr/iterable/lib/at.js";
import { atUnsafe } from "@jasonsbarr/iterable/lib/atUnsafe.js";
import { atWithDefault } from "@jasonsbarr/iterable/lib/atWithDefault.js";
import { average } from "@jasonsbarr/iterable/lib/average.js";
import { chain } from "@jasonsbarr/iterable/lib/chain.js";
import { compact } from "@jasonsbarr/iterable/lib/compact.js";
import { concat } from "@jasonsbarr/iterable/lib/concat.js";
import { concatToArray } from "@jasonsbarr/iterable/lib/concatToArray.js";
import { copy } from "@jasonsbarr/iterable/lib/copy.js";
import { copyWithin } from "@jasonsbarr/iterable/lib/copyWithin.js";
import { count } from "@jasonsbarr/iterable/lib/count.js";
import { difference } from "@jasonsbarr/iterable/lib/difference.js";
import { each } from "@jasonsbarr/iterable/lib/each.js";
import { eachWithIndex } from "@jasonsbarr/iterable/lib/eachWithIndex.js";
import { entries } from "@jasonsbarr/iterable/lib/entries.js";
import { filter } from "@jasonsbarr/iterable/lib/filter.js";
import { find } from "@jasonsbarr/iterable/lib/find.js";
import { findIndex } from "@jasonsbarr/iterable/lib/findIndex.js";
import { first } from "@jasonsbarr/iterable/lib/first.js";
import { flatten } from "@jasonsbarr/iterable/lib/flatten.js";
import { from } from "@jasonsbarr/iterable/lib/from.js";
import { includes } from "@jasonsbarr/iterable/lib/includes.js";
import { indexOf } from "@jasonsbarr/iterable/lib/indexOf.js";
import { insert } from "@jasonsbarr/iterable/lib/insert.js";
import { intersection } from "@jasonsbarr/iterable/lib/intersection.js";
import { isEmpty } from "@jasonsbarr/iterable/lib/isEmpty.js";
import { isEqual } from "@jasonsbarr/iterable/lib/isEqual.js";
import { isNil } from "@jasonsbarr/functional-core/lib/predicates/isNil.js";
import { join } from "@jasonsbarr/iterable/lib/join.js";
import { keys } from "@jasonsbarr/iterable/lib/keys.js";
import { last } from "@jasonsbarr/iterable/lib/last.js";
import { lastIndexOf } from "@jasonsbarr/iterable/lib/lastIndexOf.js";
import { length } from "@jasonsbarr/iterable/lib/length.js";
import { map } from "@jasonsbarr/iterable/lib/map.js";
import { mapWithIndex } from "@jasonsbarr/iterable/lib/mapWithIndex.js";
import { max } from "@jasonsbarr/iterable/lib/max.js";
import { median } from "@jasonsbarr/iterable/lib/median.js";
import { min } from "@jasonsbarr/iterable/lib/min.js";
import { none } from "@jasonsbarr/iterable/lib/none.js";
import { pluck } from "@jasonsbarr/iterable/lib/pluck.js";
import { prepend } from "@jasonsbarr/iterable/lib/prepend.js";
import { product } from "@jasonsbarr/iterable/lib/product.js";
import { reduce } from "@jasonsbarr/iterable/lib/reduce.js";
import { reduceRight } from "@jasonsbarr/iterable/lib/reduceRight.js";
import { reject } from "@jasonsbarr/iterable/lib/reject.js";
import { remove } from "@jasonsbarr/iterable/lib/remove.js";
import { removeAt } from "@jasonsbarr/iterable/lib/removeAt.js";
import { reverse } from "@jasonsbarr/iterable/lib/reverse.js";
import { sample } from "@jasonsbarr/iterable/lib/sample.js";
import { sequence } from "@jasonsbarr/iterable/lib/sequence.js";
import { shuffle } from "@jasonsbarr/iterable/lib/shuffle.js";
import { slice } from "@jasonsbarr/iterable/lib/slice.js";
import { sort } from "@jasonsbarr/iterable/lib/sort.js";
import { splice } from "@jasonsbarr/iterable/lib/splice.js";
import { sum } from "@jasonsbarr/iterable/lib/sum.js";
import { symmetricDifference } from "@jasonsbarr/iterable/lib/symmetricDifference.js";
import { to } from "@jasonsbarr/iterable/lib/to.js";
import { toArray } from "@jasonsbarr/iterable/lib/toArray.js";
import { traverse } from "@jasonsbarr/iterable/lib/traverse.js";
import { union } from "@jasonsbarr/iterable/lib/union.js";
import { unique } from "@jasonsbarr/iterable/lib/unique.js";
import { update } from "@jasonsbarr/iterable/lib/update.js";
import { values } from "@jasonsbarr/iterable/lib/values.js";
import { zip } from "@jasonsbarr/iterable/lib/zip.js";
import { NIL } from "./Nil.js";
import { equals } from "@jasonsbarr/functional-core/lib/object/equals.js";

class Cons extends Array {
  constructor(car, cdr) {
    super(car, cdr);

    Object.defineProperty(this, "type", {
      configurable: false,
      enumerable: false,
      writable: true,
      value: "Cons",
    });

    Object.defineProperty(this, "constructor", {
      configurable: false,
      enumerable: false,
      writable: true,
      value: cons,
    });

    Object.defineProperty(this, "size", {
      configurable: false,
      enumerable: false,
      writable: true,
      value: length(this),
    });
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

  // may return null or undefined value
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
    return List.empty();
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

  isCons() {
    return true;
  }

  isEmpty() {
    return isEmpty(this);
  }

  isEqual(other) {
    return isEqual(this, other);
  }

  isList() {
    return this.type === "List";
  }

  isNil() {
    return length(this) !== 0;
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
    return pluck(numItems, this);
  }

  // returns Option, not value
  pop() {
    return this.last();
  }

  product() {
    return product(this);
  }

  prepend(item) {
    return prepend(item, this);
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
    let arrStr = [...this].toString();
    let strArr = arrStr.split(",");
    let str =
      strArr.length == 2
        ? "'(" + strArr.join(" . ") + ")"
        : "'(" + strArr.join(" ") + ")";
    return str;
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

  update(i, updater) {
    return update(updater, i, this);
  }

  values() {
    return values(this);
  }

  // unsafe - may contain null values
  zip(...iters) {
    return zip(this, ...iters);
  }

  [Symbol.iterator]() {
    let head = this;
    let i = 0;

    return {
      next() {
        let value = head[i];
        if (value == null || value.constructor.name === "Nil") {
          return {
            done: true,
          };
        } else {
          if (head[1] instanceof Cons) {
            head = head[1];
            return {
              value,
              done: false,
            };
          } else {
            i++;
            return {
              value,
              done: false,
            };
          }
        }
      },
    };
  }
}

Cons.isCons = (obj) => typeof obj.isCons === "function" && obj.isCons();

export const cons = (car, cdr) => {
  let c = new Cons(car, cdr);
  if (cdr.type === "List") {
    c.type = "List";
  }
  return c;
};

export const List = (...args) => {
  if (
    args.length === 0 ||
    isNil(args[0]) ||
    args[0].constructor.name === "Nil"
  ) {
    return NIL;
  }

  let i = 0;
  let head = new Cons(args[i], NIL);
  let l = head;
  i++;
  while (i < args.length) {
    head[1] = new Cons(args[i], NIL);
    head = head[1];
    i++;
  }

  Object.defineProperty(l, "type", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: "List",
  });
  Object.defineProperty(l, "constructor", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: List,
  });
  Object.defineProperty(l, "size", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: length(l),
  });

  return l;
};

// constructs a list from any iterable
List.of = (iter) => List(...iter);
List.from = List.of;

List.isList = (obj) => obj.type === "List";

List.empty = () => NIL;

export const list = List;