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
  background-color: green;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: brown;
  
}

.main-content {
  flex-grow: 1;  /* Giúp nội dung mở rộng đầy đủ */
}

</style>

