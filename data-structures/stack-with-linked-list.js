class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this.length;
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const popped = this.top;
    this.top = this.top.next;
    this.length--;
    return popped;
  }
  isEmpty() {
    if (!this.length) return true;
    return false;
  }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(3);
myStack.pop();
myStack.peek();
