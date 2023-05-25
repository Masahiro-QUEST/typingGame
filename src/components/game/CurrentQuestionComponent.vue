<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <img
        :src="require(`@/assets/${StageName}/${currentQuestionImage}`)"
        alt="Current cat"
        class="mb-3 cat-image"
        :style="{ width: '25vh' }"
      />
      <div v-if="!isLastQuestion" class="text-3xl text-white">
        <div class="font-Kokoro">{{ currentQuestionJapanese }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    currentQuestionEnglish: String,
    currentQuestionJapanese: String,
    isLastQuestion: Boolean,
    currentQuestionImage: String,
    StageName: String,
  },
  watch: {
    currentQuestionEnglish: {
      immediate: true,
      handler(newQuestion) {
        this.updateCurrentQuestionEnglish(newQuestion);
        this.resetUserInput();
      },
    },
  },
  methods: {
    ...mapActions(["updateCurrentQuestionEnglish", "resetUserInput"]),
  },
};
</script>
