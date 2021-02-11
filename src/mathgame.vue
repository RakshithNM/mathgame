<template>
  <div id="app">
    <operator v-for="operator in operators" :operator="operator" :key="operator" />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import operator from './components/operator.vue';

export default {
  data() {
    return {
      operators: [
        "addition",
        "subtraction",
        "multiplication",
        "division"
      ]
    }
  },
  components: {
    operator
  }
}
</script>
