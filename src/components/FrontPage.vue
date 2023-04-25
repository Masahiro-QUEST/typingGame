<template>
  <div
    class="bg-gray-900 min-h-screen flex flex-col justify-center items-center"
  >
    <div class="text-4xl font-bold mb-8 border-b-4 border-white text-white">
      Typing Game
    </div>
    <button
      v-if="startFlg != true"
      class="py-4 px-8 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none mx-auto"
      @click="gameStart"
    >
      START
    </button>
    <div v-if="startFlg" class="flex flex-col justify-center items-center">
      <div class="py-16 text-5xl text-white">{{ current_question }}</div>
      <div
        v-if="current_question_counts == question_count"
        class="py-16 text-4xl clear text-blue-500"
      >
        Clear!
      </div>
      <div
        v-if="current_question_counts == question_count"
        class="py-16 text-4xl clear text-blue-500"
      >
        {{ elapsedTime }}秒
      </div>
      <button
        v-if="current_question_counts == question_count"
        class="py-4 px-8 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none mx-auto"
        @click="restartGame"
      >
        PLAY AGAIN
      </button>
      <div class="typeFormWrapper mb-20">
        <input
          v-if="current_question_counts != question_count"
          id="typeForm"
          v-model="typeBox"
          type="text"
          class="typeForm text-white font-bold text-lg text-center bg-transparent border-b-2 border-white w-64 focus:outline-none"
          name=""
        />
      </div>
      <div class="gaugeWrapper mb-20">
        <div :style="styleObject" class="gauge"></div>
      </div>
      <div class="text-white text-2xl">
        {{ current_question_counts }} / {{ question_count }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startFlg: false,
      current_question: "test",
      questions: ["apple", "banana", "chocolate", "donut", "espresso"],
      typeBox: "",
      current_question_counts: 0,
      question_count: 0,
      startTime: null,
      elapsedTime: null,
    };
  },
  computed: {
    styleObject: function () {
      let percent = (this.current_question_counts / this.question_count) * 100;
      return {
        width: `${percent}%`,
        background: `rgba(3, 169, 244, ${percent / 100})`,
      };
    },
  },
  methods: {
    gameStart: function () {
      this.startFlg = true;
      this.startTime = new Date();
      this.$nextTick(function () {
        document.getElementById("typeForm").focus();
      });
    },
    restartGame: function () {
      this.current_question_counts = 0;
      this.startTime = new Date();
      this.questions = ["apple", "banana", "chocolate", "donut", "espresso"];
      this.current_question = this.questions[0];
      this.startFlg = true;
      this.typeBox = "";
      this.$nextTick(function () {
        document.getElementById("typeForm").focus();
      });
    },
  },
  mounted: function () {
    this.current_question = this.questions[0];
    this.question_count = this.questions.length;
  },
  watch: {
    typeBox: function (e) {
      if (e === this.current_question) {
        this.current_question = this.questions[1];
        this.questions.splice(0, 1);
        this.typeBox = "";
        this.current_question_counts += 1;
        // クリア条件が満たされた場合
        if (this.current_question_counts == this.question_count) {
          // ゲーム終了時刻を取得し、経過時間を計算
          let endTime = new Date();
          this.elapsedTime = (endTime - this.startTime) / 1000;
          // elapsedTimeを表示または利用する処理を追加
        }
      }
    },
  },
};
</script>

<style>
.typeFormWrapper {
  text-align: center;
}
.gauge {
  height: 12px;
  transition: all 0.3s ease;
}
.gaugeWrapper {
  border: 1px solid #3e3e3e;
  height: 12px;
  width: 32rem;
}
</style>
