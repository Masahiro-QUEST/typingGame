<template>
  <div><h1>Test</h1></div>
  <div class="container">
    <div class="input-container">
      <label for="project-id">ProjectId</label>
      <input
        type="text"
        id="project-id"
        name="id"
        v-model="postData.projectId"
      />
    </div>
    <div class="input-container">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" v-model="postData.title" />
    </div>
    <div class="input-container">
      <label for="about">About</label>
      <input type="text" id="about" name="about" v-model="postData.about" />
    </div>
    <div class="input-container">
      <label for="image">Image</label>
      <input type="text" id="image" name="image" v-model="postData.image" />
    </div>
    <div class="input-container">
      <label for="link1">Link 1</label>
      <input type="text" id="link1" name="link1" v-model="postData.link1" />
    </div>
    <div class="input-container">
      <label for="link2">Link 2</label>
      <input type="text" id="link2" name="link2" v-model="postData.link2" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postData: {
        projectId: "",
        title: "",
        about: "",
        image: "",
        link1: "",
        link2: "",
      },
    };
  },
  methods: {
    PostProject() {
        axios.post()
    }
  }
};
</script>

<style></style>
