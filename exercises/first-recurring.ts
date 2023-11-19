export function findFirstRecurring(arr: number[]): number {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const fromMap = map.get(arr[i]);
    if (!fromMap) {
      map.set(arr[i], true);
    } else {
      return arr[i];
    }
  }

  return null;
}