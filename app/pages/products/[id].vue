<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id; // URL の :id 部分を取得

// productId を使って API からデータを取得したり、コンテンツを表示したりする
</script>

<template>
  <div>
    <h2>Product Detail Page</h2>
    <p>Product ID: {{ productId }}</p>
    <NuxtLink to="/products">Back to Products</NuxtLink>
  </div>
</template>
