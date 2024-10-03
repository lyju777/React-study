// 선언식
function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA(); // funcA

// 표현식
let varB = function () {
  // console.log("funcB");
};

varB();

let varC = (value) => {
  return value + 1;
};

console.log(varC(10));
