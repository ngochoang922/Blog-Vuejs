<template>
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
</template>

<script>
export default {
  name: "RightSidebar"
};
</script>

<style scoped>
.right-sidebar {
  width: 250px;
  background: rgba(255, 255, 255, 0.2); /* Làm trong suốt */
  backdrop-filter: blur(10px); /* Hiệu ứng mờ */
  padding: 15px;
  position: fixed;
  top: 60px;
  right: 0;
  height: calc(100vh - 60px); /* Giúp sidebar chiếm toàn bộ chiều cao màn hình */
  overflow-y: auto; /* Nếu nội dung quá dài, chỉ sidebar mới có thanh cuộn */
  border-radius: 10px; /* Bo góc mềm mại */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Hiệu ứng đổ bóng */
}

.sidebar-card {
  background: rgba(255, 255, 255, 0.3); /* Làm trong suốt nhẹ */
  backdrop-filter: blur(8px); /* Làm mờ nội dung phía sau */
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.news-item, .sponsored-item {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.news-dot {
  font-size: 18px;
  margin-right: 8px;
  color: red;
}

.sponsored-img {
  width: 50px;
  height: 50px;
  background: gray;
  border-radius: 5px;
  margin-right: 10px;
}
</style>
