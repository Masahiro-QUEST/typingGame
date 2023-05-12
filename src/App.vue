<template>
  <div class="d-flex flex-column min-h-screen">
    <NavbarComponetVue />
    <AudioPlayerComponetVue />
    <div class="flex-grow">
      <ToggleSwitVue @toggle="toggleMode" />
      <router-view />
    </div>
    <FooterComponetVue />
  </div>
</template>

<script>
//Componets
import NavbarComponetVue from "./views/NavbarComponet.vue";
import AudioPlayerComponetVue from "./views/AudioPlayerComponet.vue";
import FooterComponetVue from "./views/FooterComponet.vue";
//AWS
import { Auth } from "aws-amplify";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    NavbarComponetVue,
    AudioPlayerComponetVue,
    FooterComponetVue,
  },
  created() {
    this.checkAuthStatus();
  },
  methods: {
    manageBackgroundAudio() {
      const audioElement = document.getElementById("backgroundAudio");
      if (!audioElement) return;
      if (this.$route.path === "/") {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    },
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
  mounted() {
    this.manageBackgroundAudio();
  },
  watch: {
    $route() {
      this.manageBackgroundAudio();
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

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.min-h-screen {
  min-height: 100vh;
}

.flex-grow {
  flex-grow: 1;
}
</style>
