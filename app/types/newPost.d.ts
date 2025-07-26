// types/newPost.d.ts
export interface NewPost {
  title: string;
  body: string;
  userId: number;
}

// レスポンスの型も定義しておくと良いでしょう
export interface PostResponse extends NewPost {
  id: number; // 成功時にAPIから返されるID
}
