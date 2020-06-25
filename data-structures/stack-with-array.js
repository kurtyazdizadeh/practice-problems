class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length-1];
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

const myStack = new Stack();
myStack.push(5);
myStack.push(3);
myStack.pop();
myStack.peek();
