<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script>
//aws
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Auth } from "aws-amplify";

//フレームワーク
import { useStore } from "vuex";

export default {
  name: "AuthPage",
  components: {
    Authenticator,
  },
  mounted() {
    this.getUserInfo();
  },
  //ユーザー固有情報を取得
  methods: {
    async getUserInfo() {
      const store = useStore();
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        if (userInfo.attributes && userInfo.attributes.identities) {
          const identities = JSON.parse(userInfo.attributes.identities);
          store.commit("setUserId", identities[0].userId);
        }
        store.commit("setEmail", userInfo.attributes.email);
        store.commit("setUserName", userInfo.username);
      } catch {
        console.log("Not Yet Login");
      }
    },
  },
};
</script>
