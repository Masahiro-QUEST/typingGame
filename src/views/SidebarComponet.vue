<!-- SidebarComponent.vue -->
<template>
  <div class="sidebar">
    <div v-html="adHtml"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adHtml: `
        <a href="https://px.a8.net/svt/ejp?a8mat=3T8TXR+1SDWQ+4WPO+5Z6WX" rel="nofollow">
          <img border="0" width="468" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=230519439003&wid=004&eno=01&mid=s00000022902001004000&mc=1">
        </a>
        <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3T8TXR+1SDWQ+4WPO+5Z6WX" alt="">
      `,
    };
  },
};
</script>

<style scoped>
.sidebar {
  /* スタイルをここに追加 */
}
</style>
