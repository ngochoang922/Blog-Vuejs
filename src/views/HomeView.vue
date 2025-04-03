<script setup>
import HeaderView from "../views/HeaderView.vue";
import SidebarView from "../views/SidebarView.vue";
import NewsFeed from "../views/NewsFeed.vue";
import ChatSidebar from "../views/ChatSidebar.vue";
import { ref, provide } from "vue";

const searchResults = ref([])
provide("searchResults", searchResults)

</script>

<template>
  <div class="main-container">
    <HeaderView />
    
    <div class="content">
      <SidebarView />
      <NewsFeed />
      <ChatSidebar />
    </div>
  </div>
</template>o


<style scoped>
@import "../assets/styles.css";
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
};
</style>
