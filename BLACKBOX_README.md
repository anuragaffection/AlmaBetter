## Sorting Algorithms

In this file, we will implement different sorting algorithms in JavaScript.

### Bubble Sort

```
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

### Selection Sort

```
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
  return arr;
}
```

### Insertion Sort

```
function insertionSort(arr) {
  let len = arr.length;

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

### Merge Sort

```
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let halfPoint = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, halfPoint);
  let rightArr = arr.slice(halfPoint);
}
 