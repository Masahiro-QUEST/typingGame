<template>
  <div class="typeFormWrapper mb-20">
    <input
      id="typeForm"
      v-model="innerValue"
      type="text"
      class="typeForm text-white font-bold text-lg text-center bg-transparent border-b-2 border-white w-64 focus:outline-none"
      @input="$emit('update:modelValue', innerValue)"
    />
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
  watch: {
    modelValue(newValue) {
      this.innerValue = newValue;
    },
  },
};
</script>
