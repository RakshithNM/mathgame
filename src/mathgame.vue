<template>
  <div id="app">
    <nav>
      <operator v-for="operator in operators" :operator="operator" :key="operator" />
    </nav>
    <transition name="fade-left">
      <router-view></router-view>
    </transition>
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
  background: #011627;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: #1d3b53;
}
.fade-left-enter-active,
.fade-left-leave-active,
.fade-right-enter-active,
.fade-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.fade-left-enter,
.fade-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.fade-left-leave-active,
.fade-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
