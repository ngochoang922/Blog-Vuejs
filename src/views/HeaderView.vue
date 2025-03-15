<script setup>
import { ref, inject } from 'vue'
import API from '../api/api'

const searchQuery = ref('')
const searchResults = inject("searchResults")

async function searchPost() {
  if (!searchQuery.value.trim()) return
  try {
    const res = await API.get(`/post/search/${searchQuery.value}`)
    searchResults.value = res.data.metadata
    console.log('Kết quả tìm kiếm:', searchResults.value)
  } catch (error) {
    console.error('Lỗi khi tìm kiếm bài viết:', error)
  }
}
</script>

<template>
  <header class="header">
    <div class="logo-search">
      <h2 class="logo">Star Nekwork</h2>
      <div class="search-container">
        <input 
        v-model="searchQuery"
        type="text" 
        placeholder="Tìm kiếm..." 
        class="search-box" 
        @keydown.enter="searchPost"
        />
        <span class="search-icon">🔍</span>
      </div>
    </div>
    <div class="user-actions">
      <span class="action-icon">🔔</span>
      <span class="action-icon">💬</span>
      <span class="action-icon">👤</span>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin: 0;
}

.logo-search {
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 320px;
}

.logo {
  color: #1877f2;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
}

.search-container {
  position: relative;
  flex: 1;
}

.search-box {
  padding: 8px 12px 8px 36px;
  border-radius: 20px;
  border: none;
  background-color: #f0f2f5;
  width: 150%;
  font-size: 14px;
}

.search-box:focus {
  outline: none;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #65676b;
}

.navigation {
  display: flex;
  justify-content: center;
  flex: 1;
  max-width: 680px;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 56px;
  cursor: pointer;
  position: relative;
}

.nav-item.active {
  color: #1877f2;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #1877f2;
}

.nav-icon {
  font-size: 22px;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: flex-end;
  max-width: 320px;
}

.action-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
}

.action-icon:hover {
  background-color: #e4e6eb;
}

/* Sửa lỗi khoảng cách bên trên */
body {
  margin: 0;
  padding: 0;
}

#app {
  margin-top: 56px; /* Thay vì padding-top */
}

/* Đảm bảo không có khoảng cách thừa */
* {
  box-sizing: border-box;
}

/* Đảm bảo các phần tử con trong app không có margin-top mặc định */
#app > * {
  margin-top: 0;
}
</style>
