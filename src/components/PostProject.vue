<template>
  <div></div>
</template>

<script>
import { API } from "aws-amplify";
import { mapState } from "vuex";

export default {
  name: "PostPage",
  data() {
    return {
      responseMessage: "",
    };
  },
  computed: {
    ...mapState(["userId", "email", "userName", "endTime"]),
  },
  methods: {
    async createUser() {
      const apiName = "usersTableea4321bb";
      const path = "/users";
      const newUser = {
        body: {
          userId: this.userId,
          username: this.userName,
          password: "password1",
          email: this.email,
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
      } catch (error) {
        console.error("Error creating user:", error);
        this.responseMessage = "Error creating user. Please try again.";
      }
    },
  },
};
</script>
