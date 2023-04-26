<template>
  <div class="text-white text-2xl">
    {{ currentQuestionCounts }} / {{ questionCount }}
  </div>
</template>

<script>
export default {
  props: {
    currentQuestionCounts: Number,
    questionCount: Number,
  },
};
</script>
