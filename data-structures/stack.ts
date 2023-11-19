export class Stack {
  public data: Array<Node>;
  
  constructor() {
    this.data = [];
  }

  public push(value: unknown): void {
    if (!value) {
      return;
    }

    const node = new Node(value);
    this.data.push(node);
  }

  public pop(): Node {
    if (!this.data.length) {
      return null;
    }

    return this.data.pop();
  }

  public peek(): Node {
    return this.data.length
      ? this.data[this.data.length - 1]
      : null;
  }
}

class Node {
  public value: unknown;

  constructor(value: unknown) {
    this.value = value;
  }
}