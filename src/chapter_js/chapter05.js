let arr1 = [1, 2, 3];
const newLehgth = arr1.push(4, 5, 6);
// console.log(arr1);
// console.log(newLehgth);

let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
// console.log(popedItem);

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

let arr4 = [1, 2, 3];
const unshiftedLength = arr4.unshift(4, 5, 6);
// console.log(unshiftedLength, arr4);

let arr5 = [1, 2, 3, 4, 5];
const slicedArr = arr5.slice(2);
// console.log(slicedArr);

let arr6 = [1, 2, 3, 4, 5];
let arr7 = [6, 7, 8, 9, 10];

let concatedArr = arr6.concat(arr7);
// console.log(concatedArr);

let arr8 = [1, 2, 3, 4, 5];
arr8.includes(3);
// console.log(arr8.includes(10));

let arr9 = [1, 2, 3];
let index = arr9.indexOf(2);
// console.log(index);

let arr10 = [
  {
    name: "홍길동",
    age: 27,
    hobby: "등산",
  },
  {
    name: "홍길동",
    age: 27,
    hobby: "등산",
  },
  {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
  },
];

const tennisPepole = arr10.filter((item) => item.hobby === "테니스");
// console.log(tennisPepole);

let arr11 = [1, 2, 3, 4, 5];
arr11.map((item) => item * 2);
// arr11.forEach((item) => item * 2);
// console.log(arr11);

let date1 = new Date();
console.log(date1);

let date2 = new Date("1997-01-02");
