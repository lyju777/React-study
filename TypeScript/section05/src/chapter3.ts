type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<String | boolean, boolean>;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<String | boolean, boolean>;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 1;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
