<template>
  <div id="app">
    <nav>
      <operator v-for="operator in operators" :operator="operator" :key="operator" />
    </nav>
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

<style lang="sass">
body {
  margin: 0;
}

nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}
</style>
