export class BinarySearchTree {
  public root: any;

  constructor() {
    this.root = null;
  }

  public insert(value: any) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode?.value) {
        if (!currentNode?.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode?.left;
      } else {
        if (!currentNode?.right) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode?.right;
      }
    }
  }

  public lookup(value: any) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode?.value) {
        currentNode = currentNode?.left;
      } else if (value > currentNode?.value) {
        currentNode = currentNode?.right;
      } else if (value === currentNode?.value) {
        return currentNode;
      }
    }
  }
}

class Node {
  public left: Node | null;
  public right: Node | null;
  public value: any;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}