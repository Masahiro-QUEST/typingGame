<template>
  <div>
    <img
      :src="require(`@/assets/cat/${currentQuestionImage}`)"
      alt="Current cat"
      class="cat-image"
    />
    <div v-if="!isLastQuestion" class="py-16 text-5xl text-white">
      <div>{{ currentQuestionEnglish }}</div>
      <div class="text-xl">{{ currentQuestionJapanese }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestionEnglish: String,
    currentQuestionJapanese: String,
    isLastQuestion: Boolean,
    currentQuestionImage: String,
  },
};
</script>
