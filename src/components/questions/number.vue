<template>
  <p>{{ number }}</p>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
    }
  },
  props: {
    number: Number 
  }
}
</script>

<style scoped lang="sass">
p {
  display: inline;
  color: white;
}
</style>