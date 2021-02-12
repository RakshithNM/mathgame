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
  height: 2rem;

  background: #1d3b53;
  color: white;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
}
.router-link-active {
  background: #011627;
}
</style>
