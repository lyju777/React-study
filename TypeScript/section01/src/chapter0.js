let studentA = {
  name: "홍길동",
  grade: "A++",
  age: 27,
  study() {
    console.log("열심히 공부합니다.");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부합니다.");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}(을)를 사용하여 개발합니다.`);
  }
}

const studentDeveloper = new StudentDeveloper(
  "홍길동",
  "A++",
  27,
  "TypeScript"
);
console.log(studentDeveloper);
studentDeveloper.programming();

// instance 생성
// let studentB = new Student("홍길동", "A++", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
