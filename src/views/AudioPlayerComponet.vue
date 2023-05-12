<template>
  <audio id="backgroundAudio" preload="auto">
    <source :src="require('@/assets/優雅なお猫様.mp3')" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>

<script>
export default {
  name: "AudioPlayerComponent",
  methods: {
    manageBackgroundAudio() {
      const audioElement = document.getElementById("backgroundAudio");
      if (!audioElement) return;
      if (this.$route.path === "/") {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    },
  },
  mounted() {
    this.manageBackgroundAudio();
  },
  watch: {
    $route() {
      this.manageBackgroundAudio();
    },
  },
};
</script>
