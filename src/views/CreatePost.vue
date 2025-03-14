<template>
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
</template>

<script>
export default {

}
</script>

<style>
/* Tạo bài viết */
.create-post {
background-color: rgb(204 216 220 / 67%);
border-radius: 8px; /* Sửa thành 8px để trông đẹp hơn */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
width: 100%;
padding: 12px; /* Thêm padding */
margin-top: 45px; /* Đảm bảo không có margin phía trên */
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
</style>