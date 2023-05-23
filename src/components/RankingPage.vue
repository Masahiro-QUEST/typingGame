<template>
  <div class="m-6">
    <div class="font-kokoro text-3xl m-3">
      上位10名をここに表彰しております。
    </div>
    <LoadingPartsVue v-if="isLoading" :isLoading="isLoading" />
    <div v-else>
      <div
        v-for="(stage, stageName) in responseMessage"
        :key="stageName"
        class="max-w-3xl mx-auto shadow rounded-lg overflow-hidden m-3"
      >
        <div class="font-kokoro text-2xl m-3 font-bold">{{ stageName }}</div>
        <div class="bg-orange-500 text-white py-2 px-4 grid grid-cols-4">
          <h2>Ranking</h2>
          <h2>Name</h2>
          <h2>Score</h2>
        </div>
        <div class="list-none pl-5">
          <div
            v-for="(item, index) in stage.slice(0, 10)"
            :key="index"
            class="border-b border-gray-200 grid grid-cols-4 items-center bg-orange-100"
          >
            <span class="text-4xl">
              <i
                v-if="index === 0"
                class="fa-sharp fa-solid fa-chess-king fa-beat"
                style="color: #ffd700"
              ></i>
              <i
                v-else-if="index === 1"
                class="fa-sharp fa-solid fa-chess-queen fa-flip"
                style="color: #c0c0c0"
              ></i>
              <i
                v-else-if="index === 2"
                class="fa-sharp fa-solid fa-chess-knight"
                style="color: #b87333"
              ></i>
            </span>
            <span>{{ item.userName }}</span>
            <span>{{ item.score }}</span>
          </div>
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
import LoadingPartsVue from "./LoadingParts.vue";

export default {
  name: "PostPage",
  data() {
    return {
      responseMessage: [],
      userName: "",
      isLoading: false,
    };
  },
  components: {
    LoadingPartsVue,
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

    setTimeout(async () => {
      try {
        const response = await API.get(apiName, path);
        this.responseMessage = response;
        // console.log(response);
        this.isLoading = false;
      } catch (error) {
        // console.error(error);
      }
    }, 2000); // 3秒後にAPIへリクエストを送る
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
