<template>
  <header class="math-wiz-header">
    <div class="logo-container">
      <img src="@/assets/svg/logo.svg" alt="MathWiz Logo" width="48" height="48" />
    </div>
    <h1 class="title">MathWiz</h1>
  </header>
</template>

<script setup>
</script>

<style scoped>
.math-wiz-header {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(0, 0, 0, 0);
}

.logo-container {
  margin-right: 20px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
}
</style>
