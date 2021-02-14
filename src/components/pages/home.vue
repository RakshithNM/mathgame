<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Select the operator you want to play the game with from the top navigation</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      title: "MATHEMATICS GAME",
    }
  }
}
</script>

<style scoped lang="sass">
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 2rem);
  h1 {
    color: #c5e4fd;
    text-align: center;
  }
  p {
    color: #ef5350;
  }
}

</style>