<template>
  <div class="title-container">
    <span class="animated-letter" style="animation-delay: 0.1s">タ</span>
    <span class="animated-letter" style="animation-delay: 0.2s">イ</span>
    <span class="animated-letter" style="animation-delay: 0.3s">ピ</span>
    <span class="animated-letter" style="animation-delay: 0.4s">ン</span>
    <span class="animated-letter" style="animation-delay: 0.5s">グ</span>
    <span class="animated-letter" style="animation-delay: 0.6s">ゲ</span>
    <span class="animated-letter" style="animation-delay: 0.7s">ー</span>
    <span class="animated-letter" style="animation-delay: 0.8s">ム</span>
  </div>
</template>

<script>
export default {
  name: "TitleComponent",
};
</script>

<style>
.title-container {
  font-size: 6rem;
  font-family: "nikukyu", sans-serif;
  color: white;
  margin-bottom: 1rem;
}

.animated-letter {
  display: inline-block;
  animation: dropBounce 1.5s ease-in-out forwards;
  opacity: 0;
}

@keyframes dropBounce {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 0;
  }
  60% {
    transform: translateY(25px) rotate(360deg);
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(360deg);
    opacity: 1;
  }
}
</style>
