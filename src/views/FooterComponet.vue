<template>
  <footer class="footer">
    <!-- フッターの他の要素 -->
    <ToggleSwitVue @toggle="toggleMode" />
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
