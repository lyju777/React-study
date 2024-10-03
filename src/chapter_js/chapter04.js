// function returnFalse() {
//   console.log("returnFalse");
//   return false;
// }

// function returnTrue() {
//   console.log("returnTrue");
//   return true;
// }

// console.log(returnTrue() || returnFalse());

// function printName(person) {
//   const name = person && person.name;
//   console.log(name || "이름이 없습니다.");
// }

// printName();

// let arr = [1, 2, 3];

// let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// let person = {
//   name: "홍길동",
//   age: 27,
//   hobby: "수영",
// };

// let { name, age: myAge, hobby, job = "developer" } = person;
// console.log(name, myAge, hobby, job);

// spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];

// let obj1 = { one: 1, two: 2 };
// let obj2 = { three: 3, four: 4 };
// let obj3 = { ...obj1, ...obj2 };

// function funcA(p1, p2, p3) {
//   console.log(p1, p2, p3);
// }

// funcA(...arr1);

// // rest
// function funcB(one, ...rest) {
//   console.log(rest);
// }

// funcB(...arr1);

let arr = [1, 2, 3, 4, 5];

for (let idx = 0; idx < arr.length; idx++) {
  // console.log(arr[idx]);
}

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

for (let item of arr) {
  // console.log(item);
}

let person = {
  name: "홍길동",
  age: 27,
  hobby: "수영",
};

let keys = Object.keys(person);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
  const value = person[keys];
  // console.log(keys, value);
}

let values = Object.values(person);
// console.log(values);

for (let key in person) {
  // console.log(key);
}
