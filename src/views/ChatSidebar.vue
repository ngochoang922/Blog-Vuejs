<template>
    <aside class="chat-sidebar">
      <h4>Trò chuyện</h4>
      <ul>
        <li v-for="(friend, index) in friends" :key="index">{{ friend }}</li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    data() {
      return {
        friends: ["Anh Dũng", "Lan Phương", "Minh Tú", "Hải Yến"]
      };
    }
  };
  </script>
  
  <style scoped>
  .chat-sidebar {
    width: 250px;
    background: #f0f2f5;
    padding: 20px;
    height: 100vh;
    position: fixed;
    top: 60px;
    right: 0;
  }
  
  .chat-sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .chat-sidebar li {
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .chat-sidebar li:hover {
    background: #e4e6eb;
  }
  </style>
  