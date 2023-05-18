<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <img
        :src="require(`@/assets/cat/${currentQuestionImage}`)"
        alt="Current cat"
        class="cat-image"
        :style="{ width: '50%' }"
      />
      <div v-if="!isLastQuestion" class="py-12 text-3xl text-white">
        <div>{{ currentQuestionEnglish }}</div>
        <div class="text-xl">{{ currentQuestionJapanese }}</div>
      </div>
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
