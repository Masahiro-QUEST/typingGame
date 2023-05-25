<template>
  <div class="m-6">
    <div class="font-kokoro text-white text-center">--スコアを登録--</div>
    <input
      v-model="userName"
      type="text"
      placeholder="ニックネーム"
      class="m-4"
      @keydown.space.prevent
    />
    <button
      @click="createUser"
      class="shadow-lg bg-slate-500 shadow-slate-500/50 text-white rounded px-2 py-1"
    >
      Submit
    </button>
    <LoadingPartsVue :isLoading="isLoading" />
  </div>
</template>

<script>
//AWS
import { API } from "aws-amplify";
//内部
import { mapState } from "vuex";
//パッケージ
import LoadingPartsVue from "./LoadingParts.vue";

export default {
  name: "PostPage",
  data() {
    return {
      responseMessage: "",
      userName: "",
      isLoading: false,
    };
  },
  components: {
    LoadingPartsVue,
  },
  computed: {
    ...mapState(["endTime"]),
  },
  methods: {
    async createUser() {
      this.isLoading = true;
      const apiName = "usersTableea4321bb";
      const path = "/users";
      const newUser = {
        body: {
          userName: this.userName,
          stage: this.$route.path,
          score: this.endTime,
        },
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        await API.post(apiName, path, newUser);
        this.responseMessage = "User successfully created!";
      } catch {
        console.log("Not Yet Login");
        this.responseMessage = "Error creating user. Please try again.";
      } finally {
        setTimeout(() => {
          this.isLoading = false;
          this.$router.push("/"); // Change '/' to your home page route
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
