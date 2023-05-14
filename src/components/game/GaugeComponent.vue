<template>
  <div class="gaugeWrapper">
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
