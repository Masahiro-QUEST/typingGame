<template>
  <div class="sidebar" v-html="adHtml"></div>
</template>

<script>
export default {
  data() {
    return {
      adHtml: `
        <a href="https://px.a8.net/svt/ejp?a8mat=3T8WAW+93GHT6+3RW8+BYLJL" rel="nofollow">
        <img border="0" width="120" height="600" alt="" src="https://www29.a8.net/svt/bgt?aid=230522504550&wid=004&eno=01&mid=s00000017612002009000&mc=1"></a>
        <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3T8WAW+93GHT6+3RW8+BYLJL" alt="">
      `,
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  top: 50%;  /* changed from 0 to 50% */
  transform: translateY(-25%);  /* added to vertically center */
  width: 120px;
  height: 100%;
  overflow-y: auto;
  z-index: 1000;
}
</style>
