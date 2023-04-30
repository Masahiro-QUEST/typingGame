<template>
  <div>
    <nav>
      <div class="left">
        <router-link to="/">
          <div class="font-nikukyu text-center text-2xl text-gray-800">
            タイピングゲーム
          </div>
        </router-link>
      </div>
      <div class="right">
        <router-link to="/auth">Login</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import and export here
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
