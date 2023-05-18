<template>
  <button
    class="font-kokoro py-4 px-8 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none mx-auto"
    style="margin: 15px"
    @click="$emit('game-start')"
  >
    スペースを押してスタートニャ
  </button>
</template>

<script>
export default {
  data() {
    return {
      onKeyup: null,
    };
  },
  mounted() {
    this.onKeyup = (event) => {
      if (event.key === " ") {
        this.$emit("game-start");
      }
    };
    window.addEventListener("keyup", this.onKeyup);
  },
  beforeUnmount() {
    // Don't forget to remove the event listener when the component is destroyed.
    window.removeEventListener("keyup", this.onKeyup);
  },
};
</script>
