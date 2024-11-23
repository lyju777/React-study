type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<number | string | boolean>;

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
