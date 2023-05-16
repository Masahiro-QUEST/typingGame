<template>
  <div class="m-6">
    <div v-if="isLoading" class="spinner"></div>
    <div v-else class="shadow rounded-lg overflow-hidden">
      <div class="bg-blue-500 text-white py-2 px-4 grid grid-cols-3">
        <h2>Ranking</h2>
        <h2>Name</h2>
        <h2>Score</h2>
      </div>
      <div class="list-none pl-5">
        <div
          v-for="(item, index) in responseMessage"
          :key="index"
          class="border-b border-gray-200 py-2 grid grid-cols-3 items-center"
        >
          <span class="text-4xl">
            <i v-if="index === 0" class="fas fa-crown text-yellow-400"></i>
            <i v-else-if="index === 1" class="fas fa-medal text-silver"></i>
            <i v-else-if="index === 2" class="fas fa-medal text-bronze"></i>
          </span>
          <span>{{ item.username }}</span>
          <span>{{ item.gamesPlayed }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// AWS
import { API } from "aws-amplify";
//パッケージ
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  name: "PostPage",
  data() {
    return {
      responseMessage: [],
      userName: "",
      isLoading: false,
    };
  },
  computed: {
    sortedResponse() {
      return [...this.responseMessage].sort((a, b) => b - a);
    },
  },

  async created() {
    this.isLoading = true;
    const apiName = "usersTableea4321bb";
    const path = "/users/users/gamesPlayed";

    try {
      const response = await API.get(apiName, path);
      this.responseMessage = response;
      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
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
