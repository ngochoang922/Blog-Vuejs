<template>
    <aside class="sidebar">
      <ul>
        <li>📄 Trang chủ</li>
        <li>👨‍👩‍👧 Bạn bè</li>
        <li>📷 Ảnh</li>
        <li>📺 Video</li>
        <li>⚙️ Cài đặt</li>
      </ul>
    </aside>
  </template>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background: #f0f2f5;
    padding: 20px;
    height: 100vh;
    position: fixed;
    top: 60px;
    left: 0;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .sidebar li:hover {
    background: #e4e6eb;
  }
  </style>
  