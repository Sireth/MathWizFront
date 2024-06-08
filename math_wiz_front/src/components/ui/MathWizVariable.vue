<script setup>
import {computed} from "vue";


const variable = defineModel({
  default: {
    id: 0,
    name: '',
    type: '',
    val: '',
  },
  required: true
})


const variablePattern = /^[A-Za-z_][A-Za-z0-9_]*$/;

const isNameValid = computed(() => {
  return variablePattern.test(variable.value.name);
});

const isValueValid = computed(() => {
  switch (variable.value.type) {
    case 'number':
      return variable.value.val !== '' && !isNaN(Number(variable.value.val));
    case 'string':
      return typeof variable.value.val === 'string';
    case 'boolean':
      return variable.value.val === 'true' || variable.value.val === 'false';
    default:
      return false;
  }
});

const valuePlaceHolder = computed(() => {
  switch (variable.value.type) {
    case 'number':
      return "123";
    case 'string':
      return "qwerty";
    case 'boolean':
      return "true";
    default:
      return "qwerty";
  }
})
const valueType = computed(() => {
  switch (variable.value.type) {
    case 'number':
      return "number";
    case 'string':
      return "text";
    case 'boolean':
      return "text";
    default:
      return "text";
  }
})

const remove = () => {
  emit('remove', variable);
};

const emit = defineEmits(['remove']);


</script>

<template>

  <div class="row g-3">

    <div class="col-md-3">
      <label for="inputState" class="form-label">Variable type</label>
      <select id="inputState" class="form-select" v-model="variable.type">
        <option value="" disabled selected>Choose type...</option>
        <option value="number">number</option>
        <option value="string">string</option>
        <option value="boolean">boolean</option>
      </select>
    </div>

    <div class="col-md-4">
      <label for="inputName" class="form-label">Variable name</label>
      <input
          id="inputName"
          type="text"
          class="form-control"
          placeholder="abc"
          :class="{'is-invalid': !isNameValid, 'is-valid': isNameValid}"
          v-model="variable.name"
      >
    </div>

    <div class="col-md-4">
      <label for="inputValue" class="form-label">Value</label>
      <input
          id="inputValue"
          :type="valueType"
          v-model="variable.val"
          :placeholder="valuePlaceHolder"
          class="form-control"
          :class="{'is-invalid': !isValueValid, 'is-valid': isValueValid}"
      />
    </div>

    <div class="col-md-1 d-flex justify-content-center align-items-center mt-5">
      <button
          id="removeBtn"
          type="button"
          class="btn-close"
          aria-label="remove"
          @click="remove"
      ></button>
    </div>

  </div>
</template>

<style scoped>
.is-invalid {
  border-color: #dc3545 !important;
}

.is-valid {
  border-color: #28a745 !important;
}
</style>