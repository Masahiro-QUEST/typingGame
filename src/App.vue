<template>
  <div class="d-flex min-h-screen">
    <!-- <SidebarComponetVue /> -->
    <div class="d-flex flex-column flex-grow">
      <NavbarComponetVue />
      <div id="adsense-ad"></div> <!-- AdSense広告を表示するためのコンテナを追加 -->
      <router-view />
      <FooterComponetVue />
    </div>
  </div>
</template>

<script>
//Components
import NavbarComponetVue from "./views/NavbarComponet.vue";
import FooterComponetVue from "./views/FooterComponet.vue";
// import SidebarComponetVue from "./views/SidebarComponet.vue";

export default {
  name: "App",
  components: {
    NavbarComponetVue,
    FooterComponetVue,
    // SidebarComponetVue,
  },
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
    loadAdSense() {
      const adContainer = document.getElementById("adsense-ad");

      // Create the AdSense script tag
      const scriptTag = document.createElement('script');
      scriptTag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1063008269994420"
      scriptTag.async = true;
      scriptTag.crossOrigin = 'anonymous';

      // Create the AdSense ad unit
      const adUnit = document.createElement('ins');
      adUnit.className = 'adsbygoogle';
      adUnit.style.display = 'block';
      adUnit.dataset.adClient = "ca-pub-1063008269994420";
      adUnit.dataset.adSlot = "9195646704";
      adUnit.dataset.adFormat = "auto";
      adUnit.dataset.fullWidthResponsive = "true";

      // Append the AdSense ad unit to the script tag
      scriptTag.appendChild(adUnit);

      // Append the AdSense script tag to the ad container
      adContainer.appendChild(scriptTag);

      // Initialize the ad
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    },
  },
  mounted() {
    this.manageBackgroundAudio();
    this.loadAdSense(); // ページがマウントされた時にAdSenseをロードする
  },
  watch: {
    $route() {
      this.manageBackgroundAudio();
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
