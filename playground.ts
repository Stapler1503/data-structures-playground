import { MyArray } from "./data-structures/array.js";
import { HashTable } from "./data-structures/hash-table.js";
import { LinkedList } from "./data-structures/linked-list.js";
import { DoublyLinkedList } from "./data-structures/doubly-linked-list.js";
import { Stack } from "./data-structures/stack.js";
import { Queue } from "./data-structures/queue.js";
import { BinarySearchTree } from "./data-structures/binary-search-tree.js";
import { mergeSortedArrays } from './exercises/merge-sorted-arrays.js';
import { findFirstRecurring } from "./exercises/first-recurring.js";

export const runPlayground = () => {
  // Array test

  // const newArray = new MyArray();
  // newArray.push('first');
  // newArray.push('second');
  // newArray.push('third');
  // newArray.push('fourth');
  // newArray.push('fifth');

  // Hash table test

  // const newHashTable = new HashTable(5);
  // newHashTable.set('one', 1);
  // newHashTable.set('two', 2);
  // newHashTable.set('three', 3);
  // newHashTable.set('four', 4);
  // const item = newHashTable.get('four');
  // const keys = newHashTable.keys();

  // Linked List test

  // const myLinkedList = new LinkedList(100);
  // myLinkedList.prepend(0);
  // myLinkedList.append(200);
  // myLinkedList.append(300);
  // myLinkedList.append(500);
  // myLinkedList.insert(400, 4);
  // myLinkedList.printList();
  // myLinkedList.reverse();
  // myLinkedList.printList();
  // myLinkedList.delete(7);
  // const foundNode = myLinkedList.lookup(400);

  // Doubly Linked List test

  // const doublyLinkedList = new DoublyLinkedList('a');
  // doublyLinkedList.append('b');
  // doublyLinkedList.append('c');
  // doublyLinkedList.append('d');
  // doublyLinkedList.append('f');
  // doublyLinkedList.append('g');
  // doublyLinkedList.append('h');
  // doublyLinkedList.insert('e', 4);
  // doublyLinkedList.delete(4);
  // doublyLinkedList.insert('e', 4);
  // doublyLinkedList.printList();

  // Stack test

  // const myStack = new Stack();
  // myStack.push('a');
  // myStack.push('b');
  // myStack.push('c');
  // const item = myStack.peek();
  // console.log(myStack, item);

  // Queue test

  // const myQueue = new Queue();
  // myQueue.enqueue('1');
  // myQueue.enqueue('2');
  // myQueue.enqueue('3');
  // myQueue.enqueue('4');
  // myQueue.dequeue();
  // myQueue.dequeue();
  // myQueue.dequeue();
  // const item = myQueue.peek();
  // console.log(myQueue);

  // Binary search tree test

  // const newTree = new BinarySearchTree();
  // newTree.insert(9);
  // newTree.insert(4);
  // newTree.insert(20);
  // newTree.insert(1);
  // newTree.insert(6);
  // newTree.insert(15);
  // newTree.insert(170);
  // console.log(newTree); 
}
