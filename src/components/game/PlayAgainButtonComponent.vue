<template>
  <button
    class="font-kokoro py-4 px-8 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none mx-auto"
    style="margin: 20px"
    @click="navigatorToWanStage"
  >
    あそぶニャ？
  </button>
</template>

<script>
export default {
  data() {
    return {
      onkeyup: null,
    };
  },
  methods: {
    navigatorToWanStage() {
      this.$router.push("/");
    },
  },
};
</script>
