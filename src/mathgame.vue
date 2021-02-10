<template>
  <div id="app">
    <h1>{{greeting}}</h1>
    <operator />
  </div>
</template>

<script>
import Vue from 'vue';
import operator from './components/operator.vue';

export default {
  data() {
    return {
      greeting: "abc"
    }
  },
  components: {
    operator
  }
}
</script>
