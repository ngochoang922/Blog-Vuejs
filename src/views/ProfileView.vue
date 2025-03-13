<template>
    <div class="profile-container container">
      <!-- Ảnh bìa -->
      <div class="cover-photo position-relative">
        <img src="https://picsum.photos/1920/600" alt="Cover Photo" class="img-fluid w-100" />
        <div class="profile-picture-container">
          <img src="https://picsum.photos/200/200" alt="Profile Picture" class="profile-picture img-thumbnail rounded-circle" />
        </div>
      </div>
  
      <!-- Thông tin người dùng -->
      <div class="profile-info text-center mt-5">
        <h2 class="mb-1">John Doe</h2>
        <p class="text-muted">New York, NY</p>
      </div>
  
      <!-- Tabs điều hướng -->
      <ul class="nav nav-tabs justify-content-center mt-4">
        <li class="nav-item">
          <router-link to="/profile/about" class="nav-link profile-tab">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile/friends" class="nav-link profile-tab">Friends</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile/photos" class="nav-link profile-tab">Photos</router-link>
        </li>
      </ul>
  
      <!-- Nội dung động -->
      <div class="mt-4">
        <router-view />
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Ảnh bìa */
  .cover-photo {
    height: 350px;
    overflow: hidden;
    position: relative;
  }
  
  /* Định vị ảnh đại diện */
  .profile-picture-container {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  /* Ảnh đại diện */
  .profile-picture {
    width: 150px;
    height: 150px;
    border: 5px solid white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Tabs giống Facebook */
  .nav-tabs .nav-link {
    font-size: 16px;
    color: #65676b;
    padding: 10px 20px;
  }
  
  .nav-tabs .nav-link:hover {
    background: #f0f2f5;
  }
  
  .nav-tabs .nav-link.router-link-active {
    border-bottom: 3px solid #1877f2;
    color: #1877f2;
  }
  </style>
  