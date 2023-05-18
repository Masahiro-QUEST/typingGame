<template>
  <div class="typeFormWrapper mb-20">
    <input
      id="typeForm"
      v-model="innerValue"
      type="text"
      autocomplete="off"
      class="typeForm text-white font-bold text-lg text-center bg-transparent border-b-2 border-white w-64 focus:outline-none"
      @input="handleInput"
    />
    <div v-html="highlightedValue"></div>
  </div>
</template>

<script>
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
    highlightedValue() {
      return this.innerValue.replace(
        /\s/g,
        '<span class="highlighted-whitespace">$&</span>'
      );
    },
  },
  watch: {
    modelValue(newValue) {
      this.innerValue = newValue;
    },
  },
  methods: {
    handleInput() {
      this.$emit("update:modelValue", this.innerValue);
    },
  },
};
</script>

<style>
.highlighted-whitespace {
  background-color: #ff0000; /* ハイライトしたい色に変更してください */
}
</style>
