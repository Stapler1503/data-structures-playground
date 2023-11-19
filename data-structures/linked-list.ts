export class LinkedList {
  private head: Node;
  private tail: Node;
  private length: number;
  
  constructor(value: unknown) {
    this.head = new Node(value, null);
    this.tail = this.head;
    this.length = 1;
  }

  public append(value: unknown): void {
    const newNode = new Node(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  public prepend(value: unknown): void {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  public lookup(value: unknown): Node | null {
    let foundNode = this.head;

    while(foundNode.value !== value) {
      if (foundNode === this.tail && foundNode.value !== value) {
        return null;
      }
      if (foundNode.value === value) {
        return foundNode;
      }
      foundNode = foundNode.next as Node;
    }

    return foundNode;
  }

  public insert(value: unknown, index: number): void {
    if (index < 0 || index > this.length ) {
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value, null);
    const holder = this.traverseToNode(index - 1);

    newNode.next = holder.next;
    holder.next = newNode;
    this.length++;
  }

  public delete(index: number): unknown {
    if (index < 0 || index > this.length - 1) {
      return null;
    }

    if (index === 0) {
      const deletedNodeValue = this.head.value;
      this.head = this.head.next;
      this.length--;
      return deletedNodeValue;
    }

    let parentItem = this.traverseToNode(index - 1);

    const nodeToDelete = parentItem.next;
    const holder = nodeToDelete.next;

    parentItem.next = holder;

    if (index === this.length - 1) {
      this.tail = parentItem;
    }

    this.length--;

    return nodeToDelete.value;
  }

  public reverse(): void {
    if (!this.head.next) {
      return;
    }
    
    let newNode = this.head;
    const newTail = this.head;
    let newHead = newTail;

    for(let i = 0; i < this.length - 1; i++) {
      const value = newNode.next.value;
      newHead = new Node(value, newHead);
      newNode = newNode.next;
    }
    
    newTail.next = null;
    this.head = newHead;
    this.tail = newTail;
  }

  public printList(): void {
    const values = [];
    let itemTraversed = this.head;

    for(let i = 0; i < this.length; i++) {
      values.push(itemTraversed.value);
      itemTraversed = itemTraversed.next as Node;
    }

    console.log(values);
  }

  private traverseToNode(index: number): Node {
    let node = this.head;
    let i = 0;

    while (i !== index) {
      node = node.next;
      i++;
    }

    return node;
  }
}

class Node {
  public value: unknown;
  public next: Node | null;

  constructor(value: unknown, next: Node | null) {
    this.value = value;
    this.next = next;
  }
}