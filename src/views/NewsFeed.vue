<template>
    <div class="news-feed">
      <h3>Bảng tin</h3>
      
      <div v-for="(post, index) in posts" :key="index" class="post">
        <h4>{{ post.user }}</h4>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          { user: "Nguyễn Văn A", content: "Chào buổi sáng! 🌞 Chào buổi sáng! Chào buổi sáng! Chào buổi sáng!Chào buổi sáng! Chào buổi sáng!Chào buổi sáng!Chào buổi sáng! Chào buổi sáng! Chào buổi sáng! Chào buổi sáng!Chào buổi sáng!Chào buổi sáng!Chào buổi sáng!Chào buổi sáng!" },
          { user: "Trần B", content: "Hôm nay thật đẹp trời! ☀️" },
          { user: "Mai C", content: "Đi du lịch thật vui! ✈️" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .news-feed {
    flex: 1;
    padding: 20px;
    margin-left: 250px;
    margin-right: 250px;
  }
  
  .post {
    background: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  