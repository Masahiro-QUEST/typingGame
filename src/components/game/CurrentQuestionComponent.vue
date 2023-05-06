<template>
  <div>
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
  },
};
</script>
