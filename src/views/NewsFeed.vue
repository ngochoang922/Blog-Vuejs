<template>
  <div class="content">
    <div class="newsfeed">
      <!-- Tạo bài viết -->
      <CreatePost></CreatePost>
      <!-- Danh sách bài viết -->
      <div v-for="(post, index) in posts" :key="index" class="post">
        <div class="post-header">
          <span class="avatar">👤</span>
          <div class="post-info">
            <h4>{{ post.author.fullname || "Anonymous" }}</h4>
            <span class="post-time">{{ '1 giờ trước' }}</span>
          </div>
          <span class="more-options">...</span>
        </div>

        <div class="post-content">
          <p>{{ post.post_content }}</p>
          <div v-if="post.post_cover_image" class="post-image">
            <img
              src="../assets/images/sunset-forest-minimal-4k-wallpaper-thumb.jpg"
              alt="Post image"
            />
          </div>
        </div>

        <div class="post-stats">
          <span>❤️ {{ post.post_likes }}</span>
          <span
            >💬 {{ post.post_comments_count }} bình luận</span
          >
          <span>🔄 {{ Math.floor(Math.random() * 10) }} chia sẻ</span>
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
  </div>
</template>

<script>
import CreatePost from './CreatePost.vue'
import API from '../api/api'

export default {
  name: 'NewsFeed',
  components: { CreatePost },
  data() {
    return {
      posts: [],
      loading: true,
      nextCursor: null,
      limit: 10,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        // Call API get list posts
        const res = await API.get('/post', {
          params: { cursor: this.nextCursor, limit: this.limit },
        })
        this.posts = res.data.metadata.posts
        this.nextCursor = res.data.metadata.nextCursor

      } catch (error) {
        console.error('Lỗi khi tải bài viết:', error)
      } finally {
        this.loading = false
      }
    },
  },
  mounted() {
    this.fetchPosts()
  },
}
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
  background-color: url('../assets/images/sunset-forest-minimal-4k-wallpaper-thumb.jpg') no-repeat
    center center/cover;
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

/* Bài viết */
.post {
  background-color: rgb(204 216 220 / 67%);
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

.news-item,
.sponsored-item {
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

.news-item p,
.sponsored-item p {
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
