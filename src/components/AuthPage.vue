<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
export default {
  name: "AuthPage",
  components: {
    Authenticator,
  },
};
</script>
