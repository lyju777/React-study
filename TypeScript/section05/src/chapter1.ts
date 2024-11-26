interface Post {
  title: string;
  tags: string[];
  content: string;
  tumbnailURL: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};

type Readonly<T> = {
  [key in keyof T]: T[key];
};

const draft: Partial<Post> = {
  title: "제목입니다",
  content: "~~~",
};

const withThumbnailPost: Required<Post> = {
  title: "제목입니다",
  tags: ["ts"],
  content: "~~~",
  tumbnailURL: "https://example.com",
};

const readonlyPost: Readonly<Post> = {
  title: "제목입니다",
  tags: ["ts"],
  content: "~~~",
  tumbnailURL: "https://example.com",
};
