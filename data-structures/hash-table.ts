export class HashTable {
  public data: Array<unknown>;
  
  constructor(size: number) {
    this.data = new Array(size);
  }

  public set(key: string, value: any): Array<unknown> {
    const address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  public get(key: string): unknown {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      if (bucket.length === 1) {
        return bucket[0][1];
      }
      return bucket.find(el => el[0] === key)[1];
    }
    return null;
  }

  public keys(): Array<string> {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }

    return keys;
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}