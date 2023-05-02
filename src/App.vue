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
import { Auth } from "aws-amplify";
import { useStore } from "vuex";

export default {
  name: "App",
  created() {
    this.checkAuthStatus();
  },
  methods: {
    async checkAuthStatus() {
      const store = useStore();
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        const identities = JSON.parse(userInfo.attributes.identities);
        store.commit("setUserId", identities[0].userId);
        store.commit("setEmail", userInfo.attributes.email);
        store.commit("setUserName", userInfo.username);
      } catch (error) {
        console.error("No authenticated user found", error);
      }
    },
  },
};
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
