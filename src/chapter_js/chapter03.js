let obj1 = new Object();
let obj2 = {};

let person = {
  name: "홍길동", // 프로퍼티 객체의 속성
  age: 27,
  hobby: ["등산", "자전거타기"],
  10: 20,
  "hello world": true, // 프로퍼티 이름에 공백이나 특수문자가 포함된 경우
};

let name = person["hobby"];
// console.log(name[0]);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

person.job = "fe developer";
person["favFood"] = "kimchi";

// console.log(person);

delete person.age;
// console.log(person);

const animal = {
  name: "고양이",
  sound: "야옹",
  say: () => {
    console.log("");
  },
};

let f1 = undefined;
let f2 = null;
let f3 = 10;
let f4 = "hello";
let f5 = true;
let f6 = -0;
let f7 = NaN;

if (!f1) {
  console.log("f1 is undefined");
}

function printName(person2) {
  if (!person2) {
    console.log("person2 is undefined");
    return;
  }
  console.log(person.name);
}

let person2;
printName(person2);
