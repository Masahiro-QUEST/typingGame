<template>
  <div
    class="bg-gray-900 min-h-screen flex flex-col justify-center items-center"
  >
    <TitleComponent />
    <StartButtonComponent v-if="!startFlg" @game-start="gameStart" />
    <div v-if="startFlg" class="flex flex-col justify-center items-center">
      <CurrentQuestionComponent
        :currentQuestion="current_question"
        :isLastQuestion="current_question_counts === question_count"
      />
      <ClearMessageComponent
        v-if="current_question_counts === question_count"
      />
      <ElapsedTimeComponent
        v-if="current_question_counts === question_count"
        :elapsedTime="elapsedTime"
      />
      <PlayAgainButtonComponent
        v-if="current_question_counts === question_count"
        @restart-game="restartGame"
      />
      <TypeFormComponent
        v-if="current_question_counts !== question_count"
        v-model="typeBox"
      />
      <GaugeComponent :styleObject="styleObject" />
      <QuestionCounterComponent
        :currentQuestionCounts="current_question_counts"
        :questionCount="question_count"
      />
      <PostProject />
    </div>
  </div>
</template>

<script>
//コンポーネント
import TitleComponent from "./TitleComponet.vue";
import StartButtonComponent from "./StartButtonComponent.vue";
import CurrentQuestionComponent from "./CurrentQuestionComponent.vue";
import ClearMessageComponent from "./ClearMessageComponent.vue";
import ElapsedTimeComponent from "./ElapsedTimeComponent.vue";
import PlayAgainButtonComponent from "./PlayAgainButtonComponent.vue";
import TypeFormComponent from "./TypeFormComponent.vue";
import GaugeComponent from "./GaugeComponent.vue";
import QuestionCounterComponent from "./QuestionCounterComponent.vue";

//フレームワーク
import { mapMutations, mapActions } from "vuex";

import PostProject from "./PostProject.vue";

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
  components: {
    TitleComponent,
    StartButtonComponent,
    CurrentQuestionComponent,
    ClearMessageComponent,
    ElapsedTimeComponent,
    PlayAgainButtonComponent,
    TypeFormComponent,
    GaugeComponent,
    QuestionCounterComponent,
    PostProject,
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
    // mapMutationsを使ってミューテーションをメソッドとしてマッピング
    ...mapMutations([
      "setEndTime", // VuexのsetEndTimeミューテーションを同じ名前のメソッドとしてマッピング
    ]),
    ...mapActions([
      "createUser", // VuexのcreateUserアクションを同じ名前のメソッドとしてマッピング
    ]),
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
          this.setEndTime(this.elapsedTime);

          // ゲーム終了時にcreateUserアクションを呼び出す
          this.createUser();
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
