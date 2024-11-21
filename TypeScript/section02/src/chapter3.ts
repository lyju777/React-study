interface keyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: keyPair<string, number> = {
  key: "key",
  value: 1,
};

let keyPair2: keyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1,
  key2: 12313,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
  key2: "value2",
};

let numberMap: Map<number> = {
  key: 1,
  key2: 2,
};

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
  key2: "value2",
};
