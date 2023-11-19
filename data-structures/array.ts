export class MyArray {
  public length: number;
  public data: any;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  public get(index: number): unknown {
    return this.data[index];
  }

  public push(item: any): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  public pop(): unknown {
    if (this.length) {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
  }

  public delete(index: number): unknown {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      const itemToShift = this.data[i];
      this.data[i - 1] = itemToShift;
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}