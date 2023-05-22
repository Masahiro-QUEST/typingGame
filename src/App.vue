<template>
  <div class="d-flex flex-column min-h-screen">
    <NavbarComponetVue />
    <div class="flex-grow">
      <!-- <SidebarComponetVue /> -->
      <router-view />
    </div>
    <FooterComponetVue />
  </div>
</template>

<script>
//Componets
import NavbarComponetVue from "./views/NavbarComponet.vue";
import FooterComponetVue from "./views/FooterComponet.vue";
// import SidebarComponetVue from "./views/SidebarComponet.vue";

export default {
  name: "App",
  components: {
    NavbarComponetVue,
    FooterComponetVue,
    // SidebarComponetVue,
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
    toggleMode() {},
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
