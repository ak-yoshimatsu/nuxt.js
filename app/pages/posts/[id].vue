<template>
  <div>
    <h1>投稿詳細</h1>
    <p v-if="pending">読み込み中...</p>
    <div v-else-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <p v-else>投稿が見つかりませんでした。</p>
    <p v-if="error">エラー: {{ error.message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
// 定義したPostインターフェースをインポート
import type { Post } from "~/types/post"; // パスはプロジェクト構造に合わせて調整

const route = useRoute();
const postId = route.params.id;

// useFetchに型引数としてPostを指定
const {
  data: post,
  pending,
  error,
} = await useFetch<Post>(
  `https://jsonplaceholder.typicode.com/posts/${postId}`,
  {
    key: `post-${postId}`, // 一意のキーを指定
  }
);
</script>
