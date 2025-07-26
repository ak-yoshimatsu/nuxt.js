<template>
  <div>
    <h1>新しい投稿を作成</h1>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">タイトル:</label>
        <input type="text" id="title" v-model="newPost.title" required />
      </div>
      <div>
        <label for="body">本文:</label>
        <textarea id="body" v-model="newPost.body" required></textarea>
      </div>
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "送信中..." : "投稿を作成" }}
      </button>
    </form>

    <div v-if="postSuccess">
      <p style="color: green">投稿が正常に作成されました！</p>
      <p>ID: {{ postSuccess.id }}</p>
      <p>タイトル: {{ postSuccess.title }}</p>
    </div>
    <div v-if="postError">
      <p style="color: red">
        投稿中にエラーが発生しました: {{ postError.message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 定義した型をインポート
import type { NewPost, PostResponse } from "~/types/newPost"; // パスはプロジェクト構造に合わせて調整

const newPost = ref<NewPost>({
  // ここでNewPost型を適用
  title: "",
  body: "",
  userId: 1,
});

const isSubmitting = ref(false);
const postSuccess = ref<PostResponse | null>(null); // レスポンスにPostResponse型を適用
const postError = ref<Error | null>(null);

const submitPost = async () => {
  isSubmitting.value = true;
  postSuccess.value = null;
  postError.value = null;

  try {
    // useFetchにレスポンスの型とボディの型をそれぞれ指定
    const { data, error } = await useFetch<PostResponse, Error>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newPost.value,
      }
    );

    if (error.value) {
      postError.value = error.value;
      console.error("POST エラー:", error.value);
    } else {
      postSuccess.value = data.value;
      console.log("POST 成功:", data.value);
      newPost.value.title = "";
      newPost.value.body = "";
    }
  } catch (err: any) {
    // catchブロックのerrも型指定できるとベスト
    postError.value = err;
    console.error("予期せぬエラー:", err);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
