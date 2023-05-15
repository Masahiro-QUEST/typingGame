<!-- LoadingOverlayComponent.vue -->
<template>
  <loading-overlay :active="isLoading" />
</template>

<script>
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import LoadingOverlay from "vue3-loading-overlay";

export default {
  name: "LoadingOverlayComponent",
  components: {
    LoadingOverlay,
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
