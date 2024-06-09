<script setup xmlns="http://www.w3.org/1999/html">

import MathWizHeader from "@/components/MathWizHeader.vue";
import MathWizFooter from "@/components/MathWizFooter.vue";
</script>

<template>

  <MathWizHeader/>

  <main class="container">
    <div
        class="row g-3"
    >
      <div class="col-12 text-center">
        <h2 class="text-uppercase">
          <b>
            MathWiz
          </b>
        </h2>
      </div>
      <div class="col-12 text-center">
        A small parser for calculating math, logic and other types of expressions based on input.
      </div>

      <div class="col-12 text-center mt-5">
        <h4 class="text-uppercase">
          <b>
            Repositories
          </b>
        </h4>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0">
        <div class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title"><b>MathWiz</b></h5>
            <p class="card-text">A library for calculating mathematical expressions written in C++. It uses Bison and
              Flex parser generation tools to parse and analyze input expressions.</p>
          </div>
          <a href="https://github.com/Sireth/MathWiz/" class="btn btn-outline-primary mb-3 me-4 ms-4">Code</a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0">
        <div class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title"><b>MathWizApp</b></h5>
            <p class="card-text">A universal program designed to calculate mathematical, logical and other types of
              expressions based on input provided in JSON format.</p>
          </div>
          <a href="https://github.com/Sireth/MathWizApp/" class="btn btn-outline-primary mb-3 me-4 ms-4">Code</a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0">
        <div class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title"><b>MathWizBack</b></h5>
            <p class="card-text">Backend server written in Python using Django and Django Rest Framework. Works with the
              built MathWizApp application using API.</p>
          </div>
          <a href="https://github.com/Sireth/MathWizBack/" class="btn btn-outline-primary mb-3 me-4 ms-4">Code</a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0">
        <div class="card text-center h-100">
          <div class="card-body">
            <h5 class="card-title"><b>MathWizFront</b></h5>
            <p class="card-text">Frontend server written in Vue using Vite, Bootstrap. Links to MathWizBack to perform calculations.</p>
          </div>
          <a href="https://github.com/Sireth/MathWizFront/" class="btn btn-outline-primary mb-3 me-4 ms-4">Code</a>
        </div>
      </div>
    </div>
  </main>


  <MathWizFooter/>

</template>

<style scoped>
main {
  flex: 1;
}
</style>