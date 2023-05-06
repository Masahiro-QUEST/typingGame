<template>
  <div>
    <div
      class="bg-gray-900 min-h-screen flex flex-col justify-center items-center"
    >
      <TitleComponent />
      <div
        @click="navigateToNyanStage"
        class="nyan-stage-box cursor-pointer text-center py-4 px-8 text-white font-bold text-xl rounded-md hover:bg-blue-600 transition duration-200 flex flex-col items-center justify-center bg-opacity-50 hover:bg-opacity-100"
      >
        <img :src="require('@/assets/nyanstage1.png')" class="w-24 h-24 mb-2" />
        にゃんにゃんステージ
      </div>
    </div>
  </div>
</template>

<script>
//Gameコンポーネント
import TitleComponent from "./game/TitleComponet.vue";
export default {
  data() {
    return {};
  },
  components: {
    TitleComponent,
  },
  computed: {},
  methods: {
    navigateToNyanStage() {
      this.$router.push("/nyanstage");
    },
  },
  mounted: function () {},
  watch: {},
};
</script>

<style>
.nyan-stage-box {
  margin-top: 1rem;
}
</style>
