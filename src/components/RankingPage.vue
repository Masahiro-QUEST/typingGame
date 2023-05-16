<template>
  <div class="m-6">a</div>
</template>

<script>
//AWS
import { API } from "aws-amplify";
//内部

export default {
  name: "PostPage",
  data() {
    return {
      responseMessage: "",
      userName: "",
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    const apiName = "usersTableea4321bb";
    const path = "/users/users/gamesPlayed";

    try {
      const response = await API.get(apiName, path);
      console.log(response); // This should log the items from DynamoDB
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
