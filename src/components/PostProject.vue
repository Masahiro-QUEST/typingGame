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
  </div>
</template>

<script>
//AWS
import { API } from "aws-amplify";
//内部
import { mapState } from "vuex";
//パッケージ
import { v4 as uuidv4 } from "uuid";

export default {
  name: "PostPage",
  data() {
    return {
      responseMessage: "",
      userName: "",
    };
  },
  computed: {
    ...mapState(["endTime"]),
  },
  methods: {
    async createUser() {
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
      }
    },
  },
};
</script>
