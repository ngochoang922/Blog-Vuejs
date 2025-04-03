<template>
    <div class="update-infor-view">
      <h1>Cập nhật thông tin cá nhân</h1>
      
      <div class="avatar-section">
        <div class="avatar-container">
          <div class="avatar">
            <img :src="avatarPreview || '/api/placeholder/140/140'" alt="Avatar">
          </div>
        </div>
        <div class="input-container avatar-url-container">
          <i class="fas fa-link input-icon"></i>
          <input
            type="url"
            id="avatarUrl"
            v-model="avatarUrl"
            placeholder="Nhập URL ảnh đại diện"
            @input="updateAvatarPreview"
          />
        </div>
        <div class="upload-hint">Nhập đường dẫn URL đến ảnh của bạn</div>
      </div>
      
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Họ và tên</label>
          <div class="input-container">
            <i class="fas fa-user input-icon"></i>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Nhập họ và tên đầy đủ"
              required
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-container">
            <i class="fas fa-envelope input-icon"></i>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="example@domain.com"
              required
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <div class="input-container">
            <i class="fas fa-lock input-icon"></i>
            <input
              type="password"
              id="password"
              v-model="formData.password"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-check-circle"></i> Cập nhật thông tin
        </button>
      </form>
      
      <div class="success-message" :class="{ show: showSuccessMessage }">
        <i class="fas fa-check-circle"></i> Cập nhật thông tin thành công!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "UpdateInforView",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          password: ""
        },
        avatarUrl: "",
        avatarPreview: null,
        showSuccessMessage: false
      };
    },
    methods: {
      updateAvatarPreview() {
        if (this.avatarUrl && this.avatarUrl.trim() !== "") {
          this.avatarPreview = this.avatarUrl;
        } else {
          this.avatarPreview = null;
        }
      },
      submitForm() {
        // Prepare form data for submission
        const formDataToSubmit = {
          ...this.formData,
          avatarUrl: this.avatarUrl
        };

        // For demonstration, just show success message
        console.log("Thông tin đã cập nhật:", formDataToSubmit);
        
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      }
    }
  };
  </script>
  
  <style scoped>
  :root {
    --primary-color: #4361ee;
    --primary-hover: #3a56d4;
    --secondary-color: #6c757d;
    --text-color: #333;
    --light-gray: #f8f9fa;
    --border-color: #e0e0e0;
    --success-color: #4caf50;
  }
  
  * {
    box-sizing: border-box;
    transition: all 0.2s ease;
  }
  
  .update-infor-view {
    max-width: 600px;
    margin: 20px auto;
    padding: 30px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text-color);
    line-height: 1.6;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #4361ee;
    font-weight: 600;
    font-size: 28px;
  }
  
  .form-group {
    margin-bottom: 24px;
    position: relative;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 15px;
    color: #555;
  }
  
  .input-container {
    position: relative;
  }
  
  .input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
  }
  
  input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  }
  
  input:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
  }
  
  button {
    width: 100%;
    padding: 14px;
    background-color: #4361ee;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 0 4px 6px rgba(67, 97, 238, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  
  button:hover {
    background-color: #3a56d4;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(67, 97, 238, 0.25);
  }
  
  .avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e0e0e0;
  }
  
  .avatar-container {
    text-align: center;
    margin-bottom: 15px;
  }
  
  .avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #f8f9fa;
    display: inline-block;
    overflow: hidden;
    position: relative;
    border: 4px solid white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .avatar-url-container {
    width: 100%;
    max-width: 400px;
    margin-top: 15px;
  }
  
  .success-message {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateX(200%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }
  
  .success-message.show {
    transform: translateX(0);
  }
  
  .upload-hint {
    font-size: 13px;
    color: #888;
    margin-top: 5px;
  }
  
  @media (max-width: 600px) {
    .update-infor-view {
      padding: 20px;
      margin: 10px;
    }
  }
  </style>