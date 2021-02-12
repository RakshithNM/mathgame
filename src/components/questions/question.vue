<template>
	<main>
		<div v-for="question in questions" :key="question.index">
			<number :number="question.number1" />{{ operator }}<number :number="question.number2" />=
			<answer :index="question.index" v-on:questionanswered="checkCorrect" />
		</div>
	</main>
</template>

<script>
import Vue from 'vue';
import number from './number.vue';
import answer from "./input.vue";

export default {
  data() {
    return {
      questions: [] 
    }
  },
  props: {
    operator: String
  },
  components: {
    number,
    answer
  },
  created() {
		const numberOfQuestions = 56;
		for(let i = 0; i < numberOfQuestions; ++i) {
			let question = {};
			question.index = i;
			question.number1 = Math.floor(Math.random() * 90 + 10);
			question.number2 = Math.floor(Math.random() * 90 + 10);
			this.questions.push(question)
		}
  },
  methods: {
		checkCorrect(inIndex, inAnswer) {
			let question = this.getQuestion(inIndex);
			let correctAnswer = this.getCorrectAnswer(question);
			if(correctAnswer === Number(inAnswer)) {
					console.log("the answer is right");
			}
			else {
					console.log("the answer is wrong");
			}
		},
		getQuestion(inIndex) {
			return this.questions[inIndex]
		},
		getCorrectAnswer(inQuestion) {
			switch (this.operator) {
				case "+":
				  return inQuestion.number1 + inQuestion.number2;	
					break;
				case "-":
				  return inQuestion.number1 - inQuestion.number2;	
					break;
				case "*":
				  return inQuestion.number1 * inQuestion.number2;	
					break;
				case "/":
				  return inQuestion.number1 / inQuestion.number2;	
					break;
				default:
					break;
			}
		}
  }
}
</script>

<style scoped lang="sass">
main {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	div {
			padding: 1rem;
			margin: 1rem;
			outline: 1px solid black;
	}
}

</style>