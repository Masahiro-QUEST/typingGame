<template>
  <div class="typeFormWrapper mb-5">
    <div class="text-3xl mb-3" v-html="highlightedValue"></div>
    <input
      id="typeForm"
      v-model="innerValue"
      type="text"
      autocomplete="off"
      class="typeForm text-white font-bold text-lg text-center bg-transparent border-b-2 border-white w-64 focus:outline-none"
      @input="handleInput"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    modelValue: String,
  },
  data() {
    return {
      innerValue: this.modelValue,
    };
  },
  computed: {
    ...mapState(["userInput", "currentQuestionEnglish"]),
    highlightedValue() {
      let result = "";
      for (let i = 0; i < this.currentQuestionEnglish.length; i++) {
        if (this.userInput[i] === this.currentQuestionEnglish[i]) {
          // 正しく入力した文字は緑色
          result += `<span style="color: green;">${this.currentQuestionEnglish[i]}</span>`;
        } else if (this.userInput[i] !== undefined) {
          // 間違って入力した文字は赤色
          result += `<span style="color: red;">${this.currentQuestionEnglish[i]}</span>`;
        } else {
          // まだ入力されていない文字は白色
          result += `<span style="color: white;">${this.currentQuestionEnglish[i]}</span>`;
        }
      }
      return result;
    },
  },
  watch: {
    modelValue(newValue) {
      this.innerValue = newValue;
    },
  },
  methods: {
    handleInput() {
      this.updateUserInput(this.innerValue);
      this.$emit("update:modelValue", this.innerValue);
    },
    ...mapActions(["updateUserInput"]),
  },
};
</script>

<style>
.highlighted-whitespace {
  background-color: #ff0000; /* ハイライトしたい色に変更してください */
}
</style>
