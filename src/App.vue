<script setup>
import { ref, provide } from "vue";

const userId = ref(localStorage.getItem("userId"));

provide("userId", userId);

function setUserId(id) {
  userId.value = id;
  localStorage.setItem("userId", id);
}

function clearUserId() {
  userId.value = null;
  localStorage.removeItem("userId");
}

provide("userId", userId);
provide("setUserId", setUserId);
provide("clearUserId", clearUserId);
</script>

<template>
  <div id="app">

    <main class="main-content">
      <router-view class="router-container"/>
    </main>

  </div>
</template>

<script>

export default {
  name: "App",
}
</script>

<style>
body{
  background-image: url("./assets/images/Hinh-nen-don-gian-ma-dep.jpg"); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100px;
}

.main-content {
  flex-grow: 1;  /* Giúp nội dung mở rộng đầy đủ */
}

</style>

