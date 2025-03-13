<template>
  <aside class="sidebar">
    <ul>
      <li>🏠 Trang chủ</li>
      <li>👨‍👩‍👧 Bạn bè</li>
      <li>📷 Ảnh</li>
      <li>📺 Video</li>
      <li>⚙️ Cài đặt</li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background: #d5d1d1;
  padding: 20px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 50px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.sidebar li:hover {
  background: #e4e6eb;
}
</style>
