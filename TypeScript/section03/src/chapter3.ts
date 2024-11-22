interface User {
  id: number;
  name: string;
  age: number;
}

type partiaUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]?: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): User {
  return {
    id: 1,
    name: "hong",
    age: 20,
  };
}

function updateUser(user: partiaUser) {}

updateUser({
  age: 25,
});
