export class Queue {
  public first: Node;
  public last: Node;
  public length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  public enqueue(value: unknown): void {
    const node = new Node(value, null);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }

  public dequeue(): void {
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      this.length = 0;
    } else if (this.length) {
      const node = this.first;
      this.first = this.first.next;
      this.length--;
    }
  }

  public peek(): Node {
    return this.first;
  }
}

class Node {
  public value: unknown;
  public next: Node;
  
  constructor(value: unknown, next: Node) {
    this.value = value;
    this.next = next;
  }
}