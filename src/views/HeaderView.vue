<template>
    <header class="header">
      <h2>Facebook</h2>
      <input type="text" placeholder="Tìm kiếm..." class="search-box" />
      <div class="user-actions">
        <span>🔔</span>
        <span>📨</span>
        <span>👤</span>
      </div>
    </header>
  </template>
  
  <style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #1877f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: white;
    z-index: 1000;
  }
  
  .search-box {
    padding: 8px;
    width: 200px;
    border-radius: 20px;
    border: none;
  }
  
  .user-actions span {
    margin-left: 15px;
    cursor: pointer;
  }
  </style>
  