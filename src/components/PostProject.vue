<template>
  <button @click="createUser">Create User</button>
  <p v-if="responseMessage">{{ responseMessage }}</p>
</template>

<script>
import { API } from "aws-amplify";

export default {
  name: "PostPage",
  data() {
    return {
      responseMessage: "",
    };
  },
  methods: {
    async createUser() {
      const apiName = "usersTableea4321bb";
      const path = "/users";
      const newUser = {
        body: {
          userId: "user1",
          username: "username1",
          password: "password1",
          email: "email1@example.com",
          gamesPlayed: 0,
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
