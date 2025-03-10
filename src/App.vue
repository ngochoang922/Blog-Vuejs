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
  components: { }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;  /* Giúp nội dung mở rộng đầy đủ */
}

</style>

