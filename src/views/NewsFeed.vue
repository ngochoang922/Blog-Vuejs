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
