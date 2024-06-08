<script setup>
import {ref} from 'vue';
import MathWizVariableList from "@/components/MathWizVariableList.vue";

const expression = ref('');
const variables = ref([
  {
    id: Date.now(),
    name: "",
    type: "",
    val: "",
  }
]);

const removeVariable = (event) => {
  // console.log(event)
  variables.value = variables.value.filter((v) => v.id !== event.id);
}

const addVariable = () => {
  variables.value.push({
    id: Date.now(),
    name: "",
    type: "",
    val: "",
  });
}

const resultString = ref('');

const elevating = ref(false);

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
            class="btn btn-outline-primary"
        >
          Evaluate Expression
        </button>
      </div>

      <div class="container">
        <div class="row mt-5 d-flex justify-content-center align-items-center">
          <div class="col-5">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">
                  <span class="col-6"><b>Result</b></span>
                </h5>
                <p
                    class="card-text"
                    :class="{'placeholder-glow': elevating}"
                >
                  <span v-if="elevating" class="placeholder col-7"></span>
                  <span v-else-if="resultString === ''" class="col-7">
                    Click on the <span class="bg-secondary-subtle rounded-2">Calculate Expression</span> button
                  </span>
                  <span v-else class="col-7">{{ resultString }}</span>

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