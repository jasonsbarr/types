import {
  append,
  all,
  at,
  chain,
  concat,
  concatToArray,
  copy,
  copyWithin,
  each,
  eachWithIndex,
  entries,
  filter,
  first,
  flatten,
  last,
  length,
  map,
  prepend,
  reduce,
  reduceRight,
  reject,
  toArray,
  any,
  find,
  findIndex,
  includes,
  indexOf,
  join,
  lastIndexOf,
  reverse,
  sort,
  splice,
  slice,
  pluck,
  average,
  unique,
  count,
  difference,
  from,
  insert,
  intersection,
  isEmpty,
  isEqual,
} from "../../utils/iter.js";

// A tuple is immutable, like in Python.
// Objects inside it, however (not primitives!), can be mutated.
class Tuple extends Array {
  constructor(...args) {
    super(...args);

    Object.defineProperty(this, "kind", {
      configurable: false,
      enumerable: false,
      writable: true,
      value: "Tuple",
    });

    Object.defineProperty(this, "constructor", {
      configurable: false,
      enumerable: false,
      writable: true,
      value: tuple,
    });

    Object.defineProperty(this, "size", {
      configurable: false,
      enumerable: false,
      writable: true,
      value: this.length,
    });

    Object.freeze(this);
  }

  // can use either a fluent method interface or use the iterable functions used here directly
  all(pred) {
    return all(this, pred);
  }

  any(pred) {
    return any(this, pred);
  }

  append(item) {
    return append(item, this);
  }

  // returns Option, not simple value
  at(i) {
    return at(i, this);
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

  entries() {
    return entries(this);
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

  includes(value) {
    return includes(value);
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

  reverse() {
    return reverse(this);
  }

  // returns Option, not value
  shift() {
    return this.first();
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

  splice(start, deleteCount, ...items) {
    return splice(this, start, deleteCount, ...items);
  }

  take(numItems) {
    return this.pluck(numItems);
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

  unique() {
    return unique(this);
  }

  // unlike the array method, this does NOT mutate the current object
  unshift(item) {
    return this.prepend(item);
  }
}

export const tuple = (...args) => new Tuple(...args);

Tuple.of = (iter) => tuple(...iter);
Tuple.from = Tuple.of;
Tuple.isTuple = (obj) => obj.kind === "Tuple";

tuple.of = Tuple.of;
tuple.from = Tuple.from;
tuple.isTuple = Tuple.isTuple;
