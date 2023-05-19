<template>
  <button
    class="font-kokoro py-4 px-8 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none mx-auto"
    style="margin: 20px"
    @click="$emit('restart-game')"
  >
    もういちどスペースニャ？
  </button>
</template>

<script>
export default {
  data() {
    return {
      onkeyup: null,
    };
  },
  mounted() {
    this.onkeyup = (event) => {
      if (event.key === " ") {
        this.$emit("restart-game");
      }
    };
    window.addEventListener("keyup", this.onkeyup);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.onkeyup);
  },
};
</script>
