class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }
  insert(index, value) {
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    follower.previous = newNode;
    this.length++;
    return this.printList();
  }
  remove(index) {
    if (!index) {
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      index = this.length - 1;
    }

    const leader = this.traverseToIndex(index - 1);
    const follower = this.traverseToIndex(index + 1);
    const deleteMe = this.traverseToIndex(index);

    deleteMe.next = null;
    deleteMe.previous = null;

    leader.next = follower;
    follower.previous = leader;

    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    let current = 0;
    let currentNode = this.head;
    while (current !== index) {
      currentNode = currentNode.next;
      current++;
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const double = new DoublyLinkedList(5);
double.append(3);
double.append(1);
double.prepend(76);
double.insert(2, 5555);
double.remove(2);
