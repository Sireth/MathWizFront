<script setup>

const variables = defineModel({
  type: Array,
  required: true
})

const remove = (event) => {
  emit('remove', event.value);
};

const emit = defineEmits(['remove']);

import MathWizVariable from "@/components/ui/MathWizVariable.vue";
</script>

<template>
  <div class="list-group">
    <div class="col-12">
      <MathWizVariable
          class="list-group-item d-flex mt-auto"
          v-for="(variable, i) in variables"
          :key="variable.id"
          v-model="variables[i]"
          @remove="remove"
      />
    </div>
  </div>
</template>

<style scoped>

</style>