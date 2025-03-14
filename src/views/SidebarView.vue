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
  width: 220px;
  background: rgba(213, 209, 209, 0.2); /* Nền trong suốt hơn */
  padding: 15px;
  height: 90vh;
  position: fixed;
  left: 10px;
  top: 60px;
  backdrop-filter: blur(15px); /* Hiệu ứng làm mờ mạnh hơn */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Tạo hiệu ứng nổi */
  border-radius: 12px; /* Bo góc */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Viền nhẹ */
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.sidebar li:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05); /* Hiệu ứng phóng to nhẹ */
}

</style>
