<template>
  <div class="py-16 text-4xl clear text-blue-500">{{ elapsedTime }}秒</div>
</template>

<script>
export default {
  props: {
    elapsedTime: Number,
  },
};
</script>
