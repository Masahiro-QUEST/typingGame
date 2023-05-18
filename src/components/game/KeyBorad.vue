<!-- Keyboard.vue -->
<template>
  <div class="mb-5 keyboard">
    <div class="keyboard-row" v-for="(row, index) in keyboardRows" :key="index">
      <keyboard-key
        v-for="char in row"
        :key="char"
        :char="char"
        :is-active="char === activeKey"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import KeyboardKey from "./KeyboardKey.vue";

export default {
  components: {
    KeyboardKey,
  },
  computed: {
    ...mapState(["activeKey"]),
  },
  data() {
    return {
      keyboardRows: ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"],
    };
  },
  mounted() {
    window.addEventListener("keydown", this.keydownHandler);
    window.addEventListener("keyup", this.keyupHandler);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.keydownHandler);
    window.removeEventListener("keyup", this.keyupHandler);
  },
  methods: {
    keydownHandler(e) {
      this.$store.commit("setActiveKey", e.key.toUpperCase());
    },
    keyupHandler() {
      this.$store.commit("setActiveKey", null);
    },
  },
};
</script>

<style scoped>
.keyboard {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.keyboard-row {
  display: flex;
}

.keyboard-key {
  /* ここに通常のスタイルを記述 */
  display: inline-block;
  margin: 2px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  user-select: none;
}

.keyboard-key.is-active {
  /* ここにアクティブ時のスタイル（ハイライト）を記述 */
  background-color: #007bff;
  color: white;
}
</style>
