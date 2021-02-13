<template>
  <div>
    <h1>{{ title }}</h1>
    <correctanswercount :count="count" />
    <question :operator="operator" v-on:updatecount="setCount" />
  </div>
</template>

<script>
import Vue from 'vue';
import question from '../questions/question.vue';
import correctanswercount from "../correctanswers.vue";

export default {
  data() {
    return {
      title: "DIVISION",
      operator: "/",
      count: 0
    }
  },
  methods: {
    setCount(inCount) {
      this.count = inCount; 
    }
  },
  components: {
    question,
    correctanswercount
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