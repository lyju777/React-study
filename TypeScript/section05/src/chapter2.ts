interface Post {
  title: string;
  tags: string[];
  content: string;
  tumbnailURL: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 제목입니다",
  content: "옛날 내용입니다",
};

const noTitlePost: Omit<Post, "title"> = {
  tags: ["ts"],
  content: "내용입니다",
  tumbnailURL: "https://example.com",
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumnail = Record<"large" | "medium" | "small" | "watch", { url: string }>;
