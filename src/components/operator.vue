<template>
  <router-link :to="`${operator}`">{{ operator }}</router-link>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
    }
  },
  props: {
    operator: String
  }
}
</script>

<style scoped lang="sass">
a {
  width: 25%;
  background: black;
  color: white;
  text-decoration: none;
}
.router-link-active {
  background: red;
}
</style>
