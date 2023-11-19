export function mergeSortedArrays(arr1, arr2): Array<unknown> {
  if (!arr1.length) {
    return arr2;
  }

  if (!arr2.length) {
    return arr1;
  }

  const mergedArrays = [];
  let firstItem = arr1[0];
  let secondItem = arr2[0];
  let i = 1;
  let j = 1;

  while (firstItem || secondItem) {
    if (!secondItem || firstItem < secondItem) {
      mergedArrays.push(firstItem);
      firstItem = arr1[i];
      i++;
    } else if (!firstItem || firstItem >= secondItem) {
      mergedArrays.push(secondItem);
      secondItem = arr2[j];
      j++;
    }
  }

  return mergedArrays;
}

// example: mergeSortedArrays([0, 1, 2, 5, 6, 9], [3, 4, 7]);