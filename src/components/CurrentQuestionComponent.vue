<template>
  <div>
    <div v-if="!isLastQuestion" class="py-16 text-5xl text-white">
      {{ currentQuestion }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: String,
    isLastQuestion: Boolean,
  },
};
</script>
