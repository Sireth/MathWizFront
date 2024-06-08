<script setup>
import {ref, watch} from 'vue';
import MathWizVariableList from "@/components/MathWizVariableList.vue";
import apiClient from "@/plugins/axios/index.js";

const expression = ref('');
const variables = ref([
  {
    id: Date.now(),
    name: "",
    type: "",
    val: "",
    valid: false,
  }
]);

const removeVariable = (event) => {
  variables.value = variables.value.filter((v) => v.id !== event.id);
}

const addVariable = () => {
  variables.value.push({
    id: Date.now(),
    name: "",
    type: "",
    val: "",
    valid: false,
  });
}

const result = ref({
  type: '',
  result: ''
});

const elevating = ref(false);

const valid = ref(false);

watch([variables, expression], () => {
  if (expression.value === '') {
    valid.value = false;
    return;
  }
  for (let i = 0; i < variables.value.length; i++) {
    if (!variables.value[i].valid) {
      valid.value = false;
      return;
    }
  }
  valid.value = true;
}, {deep: true});

const requestGeneration = () => {
  const newList = variables.value.map(item => {
    const { id, valid, type, val, ...rest } = item;
    let value = val;

    // Преобразование значения value в зависимости от типа
    if (type === 'number') {
      value = parseFloat(value);
    } else if (type === 'boolean') {
      value = value === 'true';
    }

    return { ...rest, value, type};
  });

  return {variables: newList, expression: expression.value};
}
const elevate = async () => {
  elevating.value = true;

  result.value = {
    type: '',
    result: ''
  };

  let data = requestGeneration();
  try {
    const response = await apiClient.post("", JSON.stringify(data));
    result.value = response.data;
  } catch (error) {
    if (error.response) {
      if(error.response.data.hasOwnProperty('type') && error.response.data.type === "error"){
        console.log(error.response.data.value);
        result.value = error.response.data;
      }
      else {
        result.value.result = error.code + ": " + error.message + JSON.stringify(error.response.data, null, 2);
      }
    } else {
      result.value.result = error.message;
      console.log('Error', error.message);
    }
    result.value.type = 'error';
  }
  elevating.value = false;
}


</script>

<template>
  <main class="container">
    <div class="row g-3">
      <div class="col-md-12">
        <MathWizVariableList
            v-model="variables"
            @remove="removeVariable"
        />
      </div>
      <div class="col-md-12">
        <button
            class="btn btn-outline-success"
            @click="addVariable"
        >
          Add Variable
        </button>
      </div>
      <div class="col-md-12">
        <label for="expression" class="form-label">Expression</label>
        <input
            type="text"
            id="expression"
            class="form-control"
            v-model="expression"
            placeholder="123+45"
        />
      </div>

      <div class="col-md-12 d-flex justify-content-center">
        <button
            :disabled="!valid"
            class="btn btn-outline-primary"
            @click="elevate"
        >
          Evaluate Expression
        </button>
      </div>

      <div class="container">
        <div class="row mt-5 d-flex justify-content-center align-items-center">
          <div class="col-auto">
            <div
                class="card text-center"
                :class="{'card-body text-danger': result.type==='error', 'card-body text-success': result.type!=='error' && result.type!==''}"
            >
              <div class="card-body m-4">
                <h5 class="card-title">
                  <span v-if="result.type==='error'" class="col-6"><b>Error</b></span>
                  <span v-else class="col-6"><b>Result</b></span>
                </h5>
                <p
                    class="card-text"
                    :class="{'placeholder-glow': elevating}"
                >
                  <span v-if="elevating" class="placeholder col-7"></span>
                  <span v-else-if="result.result === ''" class="col-7">
                    Click on the <span class="bg-secondary-subtle rounded-2">Calculate Expression</span> button
                  </span>
                  <span v-else class="col-7">{{ result.result }}</span>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-5">
        <div style="height: 200px;"></div>
      </div>

    </div>

  </main>
</template>

<style scoped>
main {
  flex: 1;
}
</style>