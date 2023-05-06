<template>
  <div class="gaugeWrapper mb-20">
    <div :style="styleObject" class="gauge"></div>
  </div>
</template>

<script>
export default {
  props: {
    styleObject: Object,
  },
};
</script>
