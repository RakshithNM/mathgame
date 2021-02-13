<template>
    <form @submit.prevent="answerTheQuestion">
        <input type="number" v-model="answer" step="any" /> 
    </form>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
        answer: ''
    }
  },
  props: {
      index: Number 
  },
  methods: {
      answerTheQuestion() {
          this.$emit("questionanswered", this.index, this.answer)
      }
  }
}
</script>

<style scoped lang="sass">
form {
    display: inline;
    input {
        margin:0;
        border:0;
        padding:0;
        display:inline-block;
        vertical-align:middle;
        white-space:normal;
        background:none;
        line-height:1;
        
        /* Browsers have different default form fonts */
        font-family: 'JetBrains Mono', monospace;
        font-size: 16px;

        -webkit-box-sizing:content-box;
        -moz-box-sizing:content-box;
        box-sizing:content-box;

        background: white;
        width: 3rem;
        height: auto;
        &:focus {
            outline: 0;
        }
    }
}
</style>