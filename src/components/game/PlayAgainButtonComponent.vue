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
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      onkeyup: null,
    };
  },
  methods: {
    ...mapMutations( {
      setActiveKey: 'setActiveKey',
    }),
    resetActiveKey() {
      this.setActiveKey(null);
    },
    navigatorToWanStage() {
      this.resetActiveKey();
      this.$router.push("/");
    },
  },
};
</script>
