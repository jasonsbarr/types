import { definePropWithOpts } from "@jasonsbarr/functional-core/lib/object/definePropWithOpts.js";
import { isNil } from "@jasonsbarr/functional-core/lib/predicates/isNil.js";

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DLList {
  constructor(...args) {
    let head = null;
    let tail = null;
    let length = 0;

    for (let arg of args) {
      let node = new Node(arg);

      if (!head) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        node.prev = tail;
        tail = node;
      }

      length++;
    }

    this.head = head;
    this.tail = tail;

    definePropWithOpts("length", this, {
      writable: false,
      configurable: false,
      enumerable: false,
      value: length,
    });

    definePropWithOpts("constructor", this, {
      writable: false,
      configurable: false,
      enumerable: false,
      value: LinkedList,
    });
  }

  [Symbol.iterator]() {
    let current = this.head;

    return {
      next() {
        if (isNil(current)) {
          return { done: true };
        }

        let value = current.value;
        current = current.next;

        return { value, done: false };
      },
    };
  }
}

export const LinkedList = (...args) => new DLList(...args);
