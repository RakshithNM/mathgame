<template>
  <div>
    <h1>{{ title }}</h1>
    <question :operator="operator" v-on:updatecount="setCount" />
    <correctanswercount :count="count" />
  </div>
</template>

<script>
import Vue from 'vue';
import question from '../questions/question.vue';
import correctanswercount from "../correctanswers.vue";

export default {
  data() {
    return {
      title: "ADDITION",
      operator: "+",
      count: 0
    }
  },
  components: {
    question,
    correctanswercount
  },
  methods: {
    setCount(inCount) {
      this.count = inCount; 
    }
  }
}
</script>

<style scoped lang="sass">
div {
  h1 {
    color: white;
    text-align: center;
  }
}
</style>