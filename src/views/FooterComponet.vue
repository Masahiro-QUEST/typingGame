<template>
  <footer class="footer">
    <!-- フッターの他の要素 -->
    <ToggleSwitVue @toggle="toggleMode" />
    <div>@ 2023 web正人</div>
  </footer>
</template>

<script>
import ToggleSwitVue from "./ToggleSwit.vue";

export default {
  name: "FooterComponent",
  components: {
    ToggleSwitVue,
  },
};
</script>

<style scoped>
.footer {
  /* フッターのスタイルをここに書きます。 */
}
</style>
