<template>
  <div>
    <!-- Simple input that shows initially -->
    <div class="create-post" v-if="!showModal" @click="openModal">
      <div class="post-input">
        <span class="avatar">👤</span>
        <input type="text" placeholder="Bạn đang nghĩ gì?" readonly />
      </div>
      <div class="post-actions">
        <button class="action-btn">📷 Ảnh/Video</button>
        <button class="action-btn">😊 Cảm xúc</button>
        <button class="action-btn">📌 Vị trí</button>
      </div>
    </div>
    
    <!-- Full modal that shows when clicked -->
    <div class="modal-overlay" v-if="showModal" @click="closeModal">
      <div class="create-post-modal" @click.stop>
        <div class="modal-header">
          <h2>Tạo bài viết</h2>
          <button class="close-button" @click="closeModal">×</button>
        </div>
        
        <div class="user-profile">
          <div class="avatar-container">
            <div class="avatar">👤</div>
          </div>
          <div class="user-details">
            <div class="username">Ngọc Hoàng</div>
            <div class="privacy-setting">
            </div>
          </div>
        </div>
        
        <div class="post-textarea">
          <textarea 
            placeholder="Ngọc ơi, bạn đang nghĩ gì thế?" 
            v-model="postContent"
            ref="postTextarea"
            rows="3"
            autofocus
          ></textarea>
        </div>
        
        <div class="attachment-section">
          <div class="attachment-label">Thêm vào bài viết của bạn</div>
          <div class="attachment-icons">
            <button class="icon-button">🖼️</button>
            <button class="icon-button">👥</button>
            <button class="icon-button">😊</button>
            <button class="icon-button">📍</button>
            <button class="icon-button">GIF</button>
            <button class="icon-button">•••</button>
          </div>
        </div>
        
        <div class="post-button-container">
          <button 
            class="post-button" 
            :disabled="!postContent.trim()" 
            @click="submitPost"
          >
            Đăng
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      postContent: ''
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
      // Focus the textarea after modal opens
      this.$nextTick(() => {
        if (this.$refs.postTextarea) {
          this.$refs.postTextarea.focus();
        }
      });
    },
    closeModal() {
      this.showModal = false;
    },
    submitPost() {
      if (!this.postContent.trim()) return;
      
      // Replace with your actual API call
      console.log('Bài viết đã được đăng:', this.postContent);
      this.postContent = '';
      this.showModal = false;
    }
  }
}
</script>

<style>
/* Initial create post component */
.create-post {
  background-color: rgb(204 216 220 / 67%);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 12px;
  margin-top: 45px;
  margin-bottom: 16px;
  cursor: pointer;
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

.post-input input {
  flex: 1;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background-color: #f0f2f5;
  width: calc(100% - 44px);
  cursor: pointer;
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

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.create-post-modal {
  width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
}

.modal-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.modal-header h2 {
  margin: 15px;
  font-size: 20px;
  font-weight: 600;
}

.close-button {
  position: absolute;
  right: -15px;
  top: 20%;
  transform: translateY(-50%);
  background-color: #e4e6eb;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
}

.user-profile {
  display: flex;
  align-items: center;
  padding: 12px 16px;
}

.avatar-container {
  margin-right: 10px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.username {
  font-weight: 600;
  font-size: 15px;
}


.dropdown-arrow {
  margin-left: 4px;
  font-size: 9px;
}

.post-textarea {
  padding: 0 16px;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  border: none;
  resize: none;
  font-size: 17px;
  background: transparent;
  padding: 8px 0;
  font-family: inherit;
}

textarea:focus {
  outline: none;
}

.attachment-section {
  padding: 10px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.attachment-label {
  font-size: 14px;
  color: #65676b;
  margin-bottom: 10px;
}

.attachment-icons {
  display: flex;
  justify-content: space-between;
}

.icon-button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
}

.icon-button:hover {
  background-color: #f2f3f5;
}

.post-button-container {
  padding: 10px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.post-button {
  width: 100%;
  padding: 8px 0;
  background-color: #e4e6eb;
  color: #bcc0c4;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  cursor: not-allowed;
}

.post-button:not([disabled]) {
  background-color: #1877f2;
  color: white;
  cursor: pointer;
}
</style>