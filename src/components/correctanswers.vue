<template>
  <div>
    <p>Total correct answers are : {{ count }}</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
    }
  },
  props: {
    count: Number
  } 
}
</script>

<style scoped lang="sass">
div {
  p {
    color: white;
    text-align: center;
  }
}
</style>