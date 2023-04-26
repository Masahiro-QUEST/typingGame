<template>
  <button
    class="py-4 px-8 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none mx-auto"
    @click="$emit('game-start')"
  >
    START
  </button>
</template>
