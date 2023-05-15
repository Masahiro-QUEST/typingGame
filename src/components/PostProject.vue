<template>
  <div class="m-6">
    <div class="font-kokoro text-white">--スコアを登録--</div>
    <input
      v-model="userName"
      type="text"
      placeholder="ニックネーム"
      class="m-4"
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
import { v4 as uuidv4 } from "uuid";
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
          userId: uuidv4(),
          username: this.userName,
          password: "password1",
          email: "test",
          gamesPlayed: this.endTime,
          averageSpeed: 0,
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
.loading {
}

.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
