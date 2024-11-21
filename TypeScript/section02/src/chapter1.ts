function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("str", 2);

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);

let str = returnFirstValue([1, "b", "c"]);

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("str");

let var3 = getLength({ length: 10 });
