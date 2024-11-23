type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // string

type C = ReturnType<number>; // never

type PromiseUnpacked<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpacked<Promise<number>>;
type PromiseB = PromiseUnpacked<Promise<string>>;
