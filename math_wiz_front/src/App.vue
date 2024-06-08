<script setup>

import {ref} from "vue";

const posts = ref([
  {id: 1, name: "1", body: "1"},
  {id: 2, name: "2", body: "2"},
  {id: 3, name: "3", body: "3"},
])

</script>

<template>
  <div v-for="item in posts.values()">
    <div>{{ item.id }}</div>
    <div>{{ item.name }}</div>
    <div>{{ item.body }}</div>
  </div>
</template>

<style scoped>

</style>