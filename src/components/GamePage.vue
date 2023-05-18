<template>
  <div>
    <div class="cat-typing-game">
      <div
        v-for="i in 10"
        :key="i"
        :class="{ 'falling-cat': true, paused: hideFallingCats }"
      ></div>
      <div
        class="bg-gray-900 flex flex-col justify-center items-center"
        style="height: 80vh"
      >
        <StartButtonComponent v-if="!startFlg" @game-start="gameStart" />
        <div v-if="startFlg" class="flex flex-col justify-center items-center">
          <CurrentQuestionComponent
            :currentQuestionImage="this.current_cat_image"
            :currentQuestionEnglish="current_question_english"
            :currentQuestionJapanese="current_question_japanese"
            :isLastQuestion="current_question_counts === question_count"
          />
          <ElapsedTimeComponent
            v-if="current_question_counts === question_count"
            :elapsedTime="elapsedTime"
          />
          <PlayAgainButtonComponent
            v-if="current_question_counts === question_count"
            @restart-game="restartGame"
          />
          <PostProject v-if="current_question_counts === question_count" />
          <TypeFormComponent
            v-if="current_question_counts !== question_count"
            v-model="typeBox"
          />
          <KeyBoradVue v-if="current_question_counts !== question_count" />
          <GaugeComponent :styleObject="styleObject" />
          <QuestionCounterComponent
            :currentQuestionCounts="current_question_counts"
            :questionCount="question_count"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Gameコンポーネント
import CurrentQuestionComponent from "./game/CurrentQuestionComponent.vue";
import ElapsedTimeComponent from "./game/ElapsedTimeComponent.vue";
import PlayAgainButtonComponent from "./game/PlayAgainButtonComponent.vue";
import TypeFormComponent from "./game/TypeFormComponent.vue";
import GaugeComponent from "./game/GaugeComponent.vue";
import QuestionCounterComponent from "./game/QuestionCounterComponent.vue";
import StartButtonComponent from "./game/StartButtonComponent.vue";
import KeyBoradVue from "./game/KeyBorad.vue";

//quesions
import { questions } from "./game/questions.js";
//DynamoDB
import PostProject from "./PostProject.vue";
//フレームワーク
import { mapMutations, mapActions } from "vuex";
export default {
  name: "NyanStage",
  data() {
    return {
      startFlg: false,
      current_question: "test",
      questions: questions,
      typeBox: "",
      current_question_counts: 0,
      question_count: 3,
      startTime: null,
      elapsedTime: null,
      hideFallingCats: false,
      current_question_english: "",
      current_question_japanese: "",
      current_cat_image: "",
    };
  },
  components: {
    StartButtonComponent,
    CurrentQuestionComponent,
    ElapsedTimeComponent,
    PlayAgainButtonComponent,
    TypeFormComponent,
    GaugeComponent,
    QuestionCounterComponent,
    PostProject,
    KeyBoradVue,
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
      this.hideFallingCats = true;
      this.startTime = new Date();
      this.$nextTick(function () {
        document.getElementById("typeForm").focus();
      });
    },
    restartGame: function () {
      this.current_question_counts = 0;
      this.startTime = new Date();
      this.questions = questions;
      this.current_question = this.questions[0];
      this.startFlg = true;
      this.typeBox = "";
      this.$nextTick(function () {
        document.getElementById("typeForm").focus();
      });
    },
    getRandomQuestion() {
      const randomIndex = Math.floor(Math.random() * this.questions.length);
      return this.questions[randomIndex];
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
    const randomQuestion = this.getRandomQuestion();
    this.current_question_english = randomQuestion.english;
    this.current_question_japanese = randomQuestion.japanese;
    this.question_count = 5;
    const fallingCats = this.$el.querySelectorAll(".falling-cat");
    fallingCats.forEach((cat, index) => {
      cat.style.setProperty("--i", index);
    });
    this.current_cat_image = randomQuestion.image;
  },
  watch: {
    typeBox: function (e) {
      if (e === this.current_question_english) {
        const randomQuestion = this.getRandomQuestion();
        this.current_question_english = randomQuestion.english;
        this.current_question_japanese = randomQuestion.japanese;
        this.current_cat_image = randomQuestion.image;
        this.typeBox = "";
        this.current_question_counts += 1;

        // クリア条件が満たされた場合
        if (this.current_question_counts == this.question_count) {
          // ゲーム終了時刻を取得し、経過時間を計算
          let endTime = new Date();
          this.elapsedTime = (endTime - this.startTime) / 1000;
          this.setEndTime(this.elapsedTime);
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
@keyframes fall {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(calc(100vh + 100%));
  }
}

.falling-cat {
  position: absolute;
  width: 50px; /* 画像の幅を縮小 */
  height: 50px; /* 画像の高さを縮小 */
  background-image: url(@/assets/background_cat1.png);
  background-size: cover; /* 画像を要素のサイズに合わせる */
  animation: fall 5s linear infinite;
  animation-delay: calc(5s * var(--i) / 10);
  left: calc(100% * var(--i) / 10);
}

.cat-typing-game {
  background-image: url(@/assets/background_cat1.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.paused {
  display: none;
}
</style>
