class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this.peek();
  }
  pop() {
    return this.array.pop();
  }
  isEmpty() {
    if (!this.array.length) return true;
    return false;
  }
}


class Queue {
  constructor() {
    this.stack = new Stack();
  }
  push(value) {
    this.stack.push(value);
  }
  peek() {
    return this.stack[0];
  }
  pop() {
    const placeholder = new Stack();

    while (!this.stack.isEmpty()) {
      placeholder.push(this.stack.pop());
    }

    const popped = placeholder.pop();

    while (!placeholder.isEmpty()) {
      this.stack.push(placeholder.pop());
    }

    return popped;
  }
  empty() {
    return this.stack.isEmpty();
  }
}

const myQueue = new Queue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.peek();
myQueue.pop();
myQueue.pop();
