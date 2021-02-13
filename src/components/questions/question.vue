<template>
	<main>
		<div v-for="question in questions" :key="question.index" :class="{disabled: question.completed }">
			<number :number="question.number1" />
			<span>{{ operator }}</span>
			<number :number="question.number2" />
			<span>=</span>
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
		const numberOfQuestions = 54;
		for(let i = 0; i < numberOfQuestions; ++i) {
			let question = {};
			question.index = i;
			question.number1 = Math.floor(Math.random() * 90 + 10);
			question.number2 = Math.floor(Math.random() * 90 + 10);
			question.completed = false;
			this.questions.push(question)
		}
  },
  methods: {
		checkCorrect(inIndex, inAnswer) {
			let correctAnswer = this.getCorrectAnswer(inIndex);
			console.log("correct answer is : ", correctAnswer);
			console.log("the answer is correct", Number(inAnswer));
			if(Number(correctAnswer) === Number(inAnswer)) {
				this.questions[inIndex].answer = Number(inAnswer);
				this.questions[inIndex].completed = true;
				this.$emit("updatecount", this.getTotalAnswered());
			}	
			else {
				this.questions[inIndex].completed = false;
			}
		},
		getTotalAnswered() {
			let count = 0;
			for(let i = 0; i < this.questions.length; i++) {
				if(this.questions[i].completed) {
					count++
				}
			}
			return count;
		},
		getCorrectAnswer(inIndex) {
			let question = this.questions[inIndex];
			switch (this.operator) {
				case "+":
				  return question.number1 + question.number2;	
					break;
				case "-":
				  return question.number1 - question.number2;	
					break;
				case "*":
				  return question.number1 * question.number2;	
					break;
				case "/":
				  return (question.number1 / question.number2).toFixed(2);	
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
		outline: 1px solid white;
		span {
			color: white;
			padding: 0 0.5rem;
		}
		&.disabled {
			pointer-events: none;
			opacity: 0.1;
		}
	}
}

</style>