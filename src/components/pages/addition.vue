<template>
  <div>
    <h1>{{ title }}</h1>
    <question :operator="operator" />
  </div>
</template>

<script>
import Vue from 'vue';
import question from '../questions/question.vue';

export default {
  data() {
    return {
      title: "ADDITION",
      operator: "+"
    }
  },
  components: {
    question
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