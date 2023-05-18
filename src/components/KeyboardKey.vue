<!-- KeyboardKey.vue -->
<template>
  <div class="keyboard-key" :class="{ 'is-active': isActive }">
    {{ char }}
  </div>
</template>

<script>
export default {
  props: ["char", "isActive"],
};
</script>

<style scoped>
.keyboard-key {
  /* ここに通常のスタイルを記述 */
}
.keyboard-key.is-active {
  /* ここにアクティブ時のスタイル（ハイライト）を記述 */
}
</style>
