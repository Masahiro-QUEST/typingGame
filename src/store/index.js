// src/store/index.js
import { createStore } from "vuex";
import { API } from "aws-amplify";

export default createStore({
  state: {
    userId: "",
    endTime: "",
    email: "",
    userName: "",
    activeKey: null,
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    setEndTime(state, endTime) {
      state.endTime = endTime;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setActiveKey(state, key) {
      state.activeKey = key;
    },
  },
  actions: {
    async createUser({ state }) {
      const apiName = "usersTableea4321bb";
      const path = "/users";
      const newUser = {
        body: {
          userId: state.userId,
          username: state.userName,
          password: "password1",
          email: state.email,
          gamesPlayed: state.endTime,
          averageSpeed: 0,
        },
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        await API.post(apiName, path, newUser);
        console.log("Post Success");
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  },
  modules: {},
});
