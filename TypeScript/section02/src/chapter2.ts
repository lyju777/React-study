const arr = [1, 2, 3];
arr.map((item) => item * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (item) => item * 2);
map(["hi", "hello"], (item) => parseInt(item));

const arr2 = [1, 2, 3];
arr.forEach((item) => console.log(item));

function forEach<T>(arr: T[], Callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    Callback(arr[i]);
  }
}

forEach(arr2, (item) => {
  console.log(item.toFixed());
});
