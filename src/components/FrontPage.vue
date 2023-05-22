<template>
  <div>
    <div class="bg-gray-500 flex flex-col justify-center items-center min-h-[800px] relative overflow-hidden" style="height: 80vh; overflow: hidden;">
      <div v-for="i in 20" :key="i" class="bubble"></div>

      <TitleComponent />
      <div class="flex flex-row justify-around">
        <div
          @click="navigateToNyanStage"
          class="nyan-stage-box cursor-pointer text-center py-4 px-8 text-white font-bold text-xl rounded-md hover:bg-yellow-400 transition duration-200 flex flex-col items-center justify-center bg-opacity-50 hover:bg-opacity-100"
        >
          <img
            :src="require('@/assets/nyanstage1.png')"
            class="w-36 h-36 mb-2"
          />
          にゃんにゃんステージ
        </div>
        <div
          @click="navigatorToWanStage"
          class="nyan-stage-box cursor-pointer text-center py-4 px-8 text-white font-bold text-xl rounded-md hover:bg-blue-600 transition duration-200 flex flex-col items-center justify-center bg-opacity-50 hover:bg-opacity-100"
        >
          <img
            :src="require('@/assets/dogstage2.png')"
            class="w-36 h-36 mb-2"
          />
          わんわんステージ
        </div>
      </div>

      <div class="font-kokoro text-white text-center mt-4 px-4">
        注意:
        このゲームでは大文字と空白もチェック対象となります。正確な入力にご注意ください。
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import TitleComponent from "./game/TitleComponet.vue";

export default {
  data() {
    return {};
  },
  components: {
    TitleComponent,
  },
  mounted: function () {
    const bubbleElements = document.querySelectorAll('.bubble');

    bubbleElements.forEach((element) => {
      const animateBubble = () => {
        const xPos = Math.random() * window.innerWidth;
        const duration = Math.random() * 2000 + 3000;  // 3-5 seconds

        element.style.left = `${xPos}px`;

        anime({
          targets: element,
          top: [`${window.innerHeight}px`, '0px'],
          opacity: [0.5, 0],
          duration: duration,
          easing: 'linear',
          complete: animateBubble  // animate another bubble after one has completed its animation
        });
      };

      animateBubble();  // start the first bubble animation
    });
  },
  methods: {
    navigateToNyanStage() {
      this.$router.push("/nyanstage");
    },
    navigatorToWanStage() {
      this.$router.push("/wanstage");
    },
  },
};
</script>

<style>
.bubble {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #FF69B4;
  border-radius: 50%;
  bottom: -10px; 
  opacity: 0.5;
}

/* Your existing CSS */
.nyan-stage-box {
  margin: 1rem;
  background: linear-gradient(90deg);
}
</style>