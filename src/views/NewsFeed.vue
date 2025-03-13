<template>  
  <div class="content">
    <div class="newsfeed">
      <!-- Tạo bài viết mới -->
      <div class="create-post">
        <div class="post-input">
          <span class="avatar">👤</span>
          <input type="text" placeholder="Bạn đang nghĩ gì?" />
        </div>
        <div class="post-actions">
          <button class="action-btn">📷 Ảnh/Video</button>
          <button class="action-btn">😊 Cảm xúc</button>
          <button class="action-btn">📌 Vị trí</button>
        </div>
      </div>
      
      <!-- Danh sách bài viết -->
      <div v-for="(post, index) in posts" :key="index" class="post">
        <div class="post-header">
          <span class="avatar">👤</span>
          <div class="post-info">
            <h4>{{ post.user }}</h4>
            <span class="post-time">{{ post.time || '1 giờ trước' }}</span>
          </div>
          <span class="more-options">...</span>
        </div>
        
        <div class="post-content">
          <p>{{ post.content }}</p>
          <div v-if="post.image" class="post-image">
            <img :src="post.image" alt="Post image" />
          </div>
        </div>
        
        <div class="post-stats">
          <span>❤️ {{ post.likes || Math.floor(Math.random() * 50) + 5 }}</span>
          <span>💬 {{ post.comments || Math.floor(Math.random() * 20) + 1 }} bình luận</span>
          <span>🔄 {{ post.shares || Math.floor(Math.random() * 10) }} chia sẻ</span>
        </div>
        
        <div class="post-actions">
          <button class="reaction-btn">👍 Thích</button>
          <button class="reaction-btn">💬 Bình luận</button>
          <button class="reaction-btn">🔄 Chia sẻ</button>
        </div>
        
        <!-- Phần bình luận -->
        <div class="comments-section">
          <div class="comment-input">
            <span class="avatar small">👤</span>
            <input type="text" placeholder="Viết bình luận..." />
          </div>
        </div>
      </div>
    </div>
    
    <div class="right-sidebar">
      <div class="sidebar-card">
        <h3>Tin tức nổi bật</h3>
        <div class="news-item">
          <span class="news-dot">•</span>
          <p>Tin tức mới về công nghệ</p>
        </div>
        <div class="news-item">
          <span class="news-dot">•</span>
          <p>Sự kiện văn hóa cuối tuần</p>
        </div>
        <div class="news-item">
          <span class="news-dot">•</span>
          <p>Cập nhật thời tiết hôm nay</p>
        </div>
      </div>
      
      <div class="sidebar-card">
        <h3>Được tài trợ</h3>
        <div class="sponsored-item">
          <div class="sponsored-img"></div>
          <p>Khám phá sản phẩm mới</p>
        </div>
      </div>
    </div>
<template>
  <div class="news-feed">
    <h3>Bảng tin</h3>

    <div v-for="post in posts" :key="post._id" class="post">
      <h4>{{ post.post_title }}</h4>
      <p>{{ post.post_content }}</p>
      <p>{{ post.post_views }}</p>
      <p>{{ post.post_likes }}</p>
    </div>
    <button v-if="nextCursor" @click="loadMorePosts">Tải thêm</button>
  </div>
</template>

<script>
export default {
data() {
  return {
    posts: [
      { 
        user: "Nguyễn Văn A", 
        content: "Chào buổi sáng! 🌞 Hôm nay là một ngày tuyệt vời để bắt đầu tuần mới. Mọi người có kế hoạch gì cho ngày hôm nay không?",
        time: "20 phút trước",
        image: "/api/placeholder/600/400"
      },
      { 
        user: "Trần B", 
        content: "Hôm nay thật đẹp trời! ☀️ Đi dạo công viên và thưởng thức một tách cà phê, không còn gì tuyệt vời hơn.",
        time: "1 giờ trước" 
      },
      { 
        user: "Mai C", 
        content: "Đi du lịch Đà Nẵng thật vui! ✈️ Để lại vài tấm hình kỷ niệm chuyến đi. Ai có gợi ý cho địa điểm tiếp theo không?",
        time: "3 giờ trước",
        image: "/api/placeholder/600/350" 
      }
    ]
  };
}
};
</script>

<style>
/* Reset CSS */
* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body {
margin: 0;
padding: 0;
background-color:url('../assets/images/sunset-forest-minimal-4k-wallpaper-thumb.jpg') no-repeat center center/cover;
}

/* Container chính */
.fb-style-container {
background-color: #20242a;
min-height: 100vh;
color: #1c1e21;
width: 100%;
position: relative;
}

/* Layout chính */
.content {
display: flex;
max-width: 1200px;
margin: 0 auto;
gap: 20px;
justify-content: center;

}

.newsfeed {
flex: 2;
max-width: 680px;
max-height: unset; /* Loại bỏ giới hạn chiều cao */
padding-top: 16px; /* Thêm padding-top cho phần newsfeed */
}

.right-sidebar {
flex: 1;
max-width: 320px;
padding-top: 16px; /* Thêm padding-top cho phần sidebar */
}

/* Tạo bài viết */
.create-post {
background-color: #d5d1d1;
border-radius: 8px; /* Sửa thành 8px để trông đẹp hơn */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
width: 100%;
padding: 12px; /* Thêm padding */
margin-top: 0; /* Đảm bảo không có margin phía trên */
margin-bottom: 16px;
}

.post-input {
display: flex;
align-items: center;
margin-bottom: 12px;
width: 100%;
}

.avatar {
font-size: 36px;
margin-right: 8px;
flex-shrink: 0;
}

.small {
font-size: 24px;
}

.post-input input {
flex: 1;
padding: 8px 16px;
border-radius: 20px;
border: none;
background-color: #f0f2f5;
width: calc(100% - 44px);
}

.post-actions {
display: flex;
justify-content: space-around;
border-top: 1px solid #e4e6eb;
padding-top: 8px;
width: 100%;
}

.action-btn {
background: none;
border: none;
padding: 8px;
cursor: pointer;
font-size: 14px;
color: #65676b;
border-radius: 4px;
flex: 1;
text-align: center;
}

.action-btn:hover {
background-color: #f0f2f5;
}

/* Bài viết */
.post {
background-color: #d5d1d1;
border-radius: 8px;
padding: 12px;
margin-bottom: 16px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
width: 100%;
}

.post-header {
display: flex;
align-items: center;
margin-bottom: 12px;
width: 100%;
}

.post-info {
flex: 1;
margin: 0 8px;
}

.post-info h4 {
margin: 0 0 4px 0;
font-size: 16px;
}

.post-time {
color: #65676b;
font-size: 12px;
}

.more-options {
font-size: 20px;
cursor: pointer;
}

.post-content {
margin-bottom: 12px;
width: 100%;
}

.post-content p {
margin-bottom: 12px;
line-height: 1.5;
}

.post-image {
width: 100%;
border-radius: 8px;
overflow: hidden;
margin-bottom: 12px;
}

.post-image img {
width: 100%;
height: auto;
object-fit: cover;
display: block;
}

.post-stats {
display: flex;
justify-content: space-between;
color: #65676b;
font-size: 14px;
padding: 8px 0;
border-bottom: 1px solid #e4e6eb;
width: 100%;
}

.post-actions {
display: flex;
justify-content: space-between;
padding: 8px 0;
width: 100%;
}

.reaction-btn {
flex: 1;
background: none;
border: none;
padding: 8px;
cursor: pointer;
font-size: 14px;
color: #65676b;
border-radius: 4px;
text-align: center;
}

.reaction-btn:hover {
background-color: #f0f2f5;
}

.comments-section {
margin-top: 12px;
width: 100%;
}

.comment-input {
display: flex;
align-items: center;
width: 100%;
}

.comment-input input {
flex: 1;
padding: 8px 16px;
border-radius: 20px;
border: none;
background-color: #f0f2f5;
width: calc(100% - 32px);
}

/* Sidebar */
.sidebar-card {
background-color: #d5d1d1;
border-radius: 8px;
padding: 16px;
margin-bottom: 16px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
width: 100%;
}

.sidebar-card h3 {
margin-bottom: 12px;
font-size: 16px;
color: #65676b;
}

.news-item, .sponsored-item {
display: flex;
align-items: flex-start;
margin-bottom: 12px;
width: 100%;
}

.news-dot {
margin-right: 8px;
font-size: 24px;
color: #1877f2;
flex-shrink: 0;
}

.news-item p, .sponsored-item p {
flex: 1;
}

.sponsored-img {
width: 60px;
height: 60px;
background-color: #f0f2f5;
border-radius: 8px;
margin-right: 8px;
flex-shrink: 0;
}

/* Điều chỉnh cho màn hình nhỏ */
@media (max-width: 768px) {
.content {
  flex-direction: column;
  padding: 0 10px;
}

.newsfeed {
  margin-right: 0;
  margin-bottom: 20px;
  max-width: 100%;
}

.right-sidebar {
  max-width: 100%;
}


}
</style>
import API from '../api/api'
import { nextTick } from 'vue'

export default {
  data() {
    return {
      posts: [],
      nextCursor: null,
      limit: 10,
    }
  },
  methods: {
    async fetchPosts(cursor = null) {
      try {
        const res = await API.get('/post', {
          params: { cursor, limit: this.limit },
        })

        this.posts = [...this.posts, ...res.data.data] // Gộp dữ liệu mới vào danh sách
        this.nextCursor = res.data.nextCursor // Lưu cursor để tải tiếp

        await nextTick()
        // console.log("Sau khi cập nhật nextCursor:", this.nextCursor);
        console.log(this.posts.length)
      } catch (error) {
        console.error('Lỗi khi tải bài viết', error)
      }
    },
    loadMorePosts() {
      this.fetchPosts(this.nextCursor)
    },
  },
  mounted() {
    this.fetchPosts()
  },
}
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
