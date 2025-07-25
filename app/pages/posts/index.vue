<template>
  <div>
    <h1>投稿一覧</h1>
    <p v-if="pending">データを読み込み中...</p>
    <ul v-else-if="posts && posts.length">
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <p v-else>投稿がありません。</p>
    <p v-if="error">エラーが発生しました: {{ error.message }}</p>
  </div>
</template>

<script setup>
// useFetch をインポート
const {
  data: posts,
  pending,
  error,
} = await useFetch("https://jsonplaceholder.typicode.com/posts");

// posts: 取得したデータ
// pending: データ取得中かどうか (boolean)
// error: エラーが発生した場合のエラーオブジェクト
</script>
