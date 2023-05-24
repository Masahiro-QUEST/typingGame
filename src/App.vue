<template>
  <div id="app">
    <NavbarComponetVue />
    <div id="content">
      <router-view />
    </div>
    <FooterComponetVue />
  </div>
</template>

<script>
// Components
import NavbarComponetVue from "./views/NavbarComponet.vue";
import FooterComponetVue from "./views/FooterComponet.vue";

export default {
  name: "App",
  components: {
    NavbarComponetVue,
    FooterComponetVue,
  },
  methods: {
  },
  mounted() {
  },
  watch: {
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

#content {
  flex-grow: 1;
  overflow: auto;
}
</style>
