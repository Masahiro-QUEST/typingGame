<template>
  <nav>
    <div class="left">
      <router-link to="/">
        <div class="font-nikukyu text-center text-2xl text-gray-800">
          タイピングゲーム
        </div>
      </router-link>
    </div>

    <div class="right">
      <router-link to="/ranking">
        <div class="font-nikukyu text-center text-2xl text-gray-800">
          ランキング
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
