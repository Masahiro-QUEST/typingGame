<template>
  <footer class="footer">
    <!-- フッターの他の要素 -->
    <a
      href="https://px.a8.net/svt/ejp?a8mat=3T8TXR+1SDWQ+4WPO+5Z6WX"
      rel="nofollow"
    >
      <img
        border="0"
        width="468"
        height="60"
        alt=""
        src="https://www29.a8.net/svt/bgt?aid=230519439003&wid=004&eno=01&mid=s00000022902001004000&mc=1"
    /></a>
    <img
      border="0"
      width="1"
      height="1"
      src="https://www10.a8.net/0.gif?a8mat=3T8TXR+1SDWQ+4WPO+5Z6WX"
      alt=""
    />
    <div @click="navigatorToAbout">@ 2023 web正人</div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  components: {},
  methods: {
    navigatorToAbout() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
