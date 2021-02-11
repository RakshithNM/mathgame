<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      title: "ADDITION",
    }
  },
  props: {
    operator: String
  }
}
</script>

<style scoped lang="sass">
h1 {
  color: blue;
  text-align: center;
}
</style>