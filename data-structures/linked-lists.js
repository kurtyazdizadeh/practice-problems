class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
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
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    if (index < 0) return;

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex === index - 1) {
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return this.printList();
      } else {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
    return this.printList();
  }
  remove(index){
    let currentNode = this.head;
    let currentIndex = 0;

    if (!index) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    if (index >= this.length) {
      index = this.length - 1;
    }

    while (currentNode !== null) {
      if (currentIndex === index - 1) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return this.printList();
      } else {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }
  reverse() {
    const array = this.printList();

    const reversedList = new LinkedList(array[array.length-1]);
    for (let i=array.length-2; i >= 0; i--){
      reversedList.append(array[i]);
    }
    return reversedList;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3,222)
myLinkedList.remove(3);
console.log(myLinkedList.printList())
console.log(myLinkedList);
console.log(myLinkedList.reverse())
