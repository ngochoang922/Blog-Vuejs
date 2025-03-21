<script setup>
import CreatePost from './CreatePost.vue'
import API from '../api/api'
import { inject, onMounted, ref, watchEffect } from 'vue'

const userId = inject('userId') // ✅ Inject userId từ App.vue

const posts = ref([])
const loading = ref(true)
const nextCursor = ref(null)
const limit = 10
const content = ref('')
const commentParentId = ref(null)
const searchResults = inject('searchResults')
let loadSearchResults = ref(false)

// postId, userId, content, commentParentId

async function createComment(post) {
  if (!content.value.trim()) return
  try {
    const res = await API.post('/comment', {
      postId: post._id,
      userId: userId.value,
      content: content.value,
      commentParentId: commentParentId.value,
    })

    post.comments.push({
      _id: res.data.metadata._id,
      author: { fullname: 'Bạn' },
      comment_content: res.data.metadata.comment_content,
    })

    content.value = ''
  } catch (error) {
    console.error('Lỗi khi tạo bình luận:', error)
  }
}

async function fetchPosts() {
  try {
    const res = await API.get('/post', {
      params: { cursor: nextCursor.value, limit: limit },
    })
    posts.value = res.data.metadata.posts.map((post) => ({
      ...post,
      comments: [],
    }))

    for (let post of posts.value) {
      const commentRes = await API.get(`/comment?postId=${post._id}`)

      post.comments = commentRes.data.metadata
      console.log('Comments:', post.comments, post._id)
    }
    nextCursor.value = res.data.metadata.nextCursor
  } catch (error) {
    console.error('Fetch Posts Error:', error)
  } finally {
    loading.value = false
  }
}

async function likePost(post) {
  const res = await API.post('/like', {
    postId: post._id,
    userId: userId.value,
  })
  post.isLiked = res.data.metadata
  post.post_likes += res.data.metadata ? 1 : -1
}

function formatTime(post) {
  const now = new Date()
  const postDate = new Date(post.createdAt)
  const diffMs = now - postDate

  const seconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (seconds < 60) return 'Vừa xong'
  if (minutes < 60) return `${minutes} phút trước`
  if (hours < 24) return `${hours} giờ trước`
  if (days === 1) return 'Hôm qua'
  if (days < 7) return `${days} ngày trước`
  if (weeks < 4) return `${weeks} tuần trước`
  if (months < 12) return `${months} tháng trước`
  return `${years} năm trước`
}

onMounted(() => {
  if (!searchResults.value.length) {
    fetchPosts()
  }
})

watchEffect(() => {
  console.log('📢 NewsFeed nhận searchResults:', searchResults.value)
  loadSearchResults.value = searchResults.value.length > 0
})
</script>

<template>
  <div class="content">
    <div class="newsfeed">
      <!-- Tạo bài viết -->
      <CreatePost />

      <!-- 🔍 Nếu có kết quả tìm kiếm, hiển thị danh sách tìm kiếm -->
      <div v-if="loadSearchResults">
        <div v-if="searchResults.length">
          <h3>Kết quả tìm kiếm</h3>
          <div v-for="(post, index) in searchResults" :key="index" class="post">
            <div class="post-header">
              <span class="avatar">👤</span>
              <div class="post-info">
                <h4>{{ post.author?.fullname || 'Anonymous' }}</h4>
                <span class="post-time">{{ formatTime(post) }}</span>
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
              <span>💬 {{ post.post_comments_count }} bình luận</span>
              <span>🔄 {{ Math.floor(Math.random() * 10) }} chia sẻ</span>
            </div>

            <div class="post-actions">
              <button class="reaction-btn" :class="{ liked: post.isLiked }" @click="likePost(post)">
                👍 {{ post.isLiked ? 'Đã thích' : 'Thích' }}
              </button>
              <button class="reaction-btn">💬 Bình luận</button>
              <button class="reaction-btn">🔄 Chia sẻ</button>
            </div>

            <!-- Phần bình luận -->
            <div class="comments-section">
              <div class="comment-input">
                <span class="avatar small">👤</span>
                <input
                  v-model="content"
                  type="text"
                  placeholder="Viết bình luận..."
                  @keydown.enter="createComment(post)"
                />
              </div>
            </div>

            <!-- Danh sách bình luận -->
            <div class="comments-list">
              <div v-for="comment in post.comments" :key="comment.id" class="comment">
                <span class="avatar small">👤</span>
                <div>
                  <strong>{{ comment.comment_user_id?.fullname || 'Anonymous' }}</strong>
                  <p>{{ comment.comment_content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h3>Không tìm thấy bài viết nào</h3>  
        </div>
      </div>

      <!-- 📌 Nếu không có tìm kiếm, hiển thị bài viết mặc định -->
      <div v-else>
        <h3>Bài viết mới</h3>
        <div v-for="(post, index) in posts" :key="index" class="post">
          <div class="post-header">
            <span class="avatar">👤</span>
            <div class="post-info">
              <h4>{{ post.author?.fullname || 'Anonymous' }}</h4>
              <span class="post-time">{{ formatTime(post) }}</span>
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
            <span>💬 {{ post.post_comments_count }} bình luận</span>
            <span>🔄 {{ Math.floor(Math.random() * 10) }} chia sẻ</span>
          </div>

          <div class="post-actions">
            <button class="reaction-btn" :class="{ liked: post.isLiked }" @click="likePost(post)">
              👍 {{ post.isLiked ? 'Đã thích' : 'Thích' }}
            </button>
            <button class="reaction-btn">💬 Bình luận</button>
            <button class="reaction-btn">🔄 Chia sẻ</button>
          </div>

          <!-- Phần bình luận -->
          <div class="comments-section">
            <div class="comment-input">
              <span class="avatar small">👤</span>
              <input
                v-model="content"
                type="text"
                placeholder="Viết bình luận..."
                @keydown.enter="createComment(post)"
              />
            </div>
          </div>

          <!-- Danh sách bình luận -->
          <div class="comments-list">
            <div v-for="comment in post.comments" :key="comment.id" class="comment">
              <span class="avatar small">👤</span>
              <div>
                <strong>{{ comment.comment_user_id?.fullname || 'Anonymous' }}</strong>
                <p>{{ comment.comment_content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

/* Bình luận */
.comments-list {
  margin-top: 10px;
  padding-left: 10px;
  border-left: 2px solid #ccc;
}

.comment {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: #f1f1f1; /* Nền xám nhẹ */
  transition: background 0.2s ease-in-out;
}

.comment:hover {
  background: #e0e0e0; /* Màu sáng hơn khi hover */
}

/* 📌 Avatar nhỏ */
.avatar.small {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

/* 📌 Nội dung bình luận */
.comment div {
  flex: 1;
}

.comment strong {
  font-size: 14px;
  color: #333;
}

.comment p {
  font-size: 14px;
  color: #555;
  margin-top: 2px;
}

/* 📌 Responsive cho màn hình nhỏ */
@media (max-width: 600px) {
  .comment {
    flex-direction: column;
    align-items: flex-start;
  }

  .avatar.small {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }

  .comment strong {
    font-size: 13px;
  }

  .comment p {
    font-size: 13px;
  }
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
