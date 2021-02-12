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
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');;
body {
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  background: red;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
</style>
