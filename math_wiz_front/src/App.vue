<script setup>


import MathWizFooter from "@/components/MathWizFooter.vue";
import MathWizHeader from "@/components/MathWizHeader.vue";
import MathWizMain from "@/components/MathWizMain.vue";
</script>

<template>
  <div id="app">
    <MathWizHeader />

    <MathWizMain />

    <MathWizFooter />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


</style>