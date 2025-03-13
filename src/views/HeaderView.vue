<template>
  <header class="header">
    <div class="logo-search">
      <h2 class="logo">Star Nekwork</h2>
      <div class="search-container">
        <input type="text" placeholder="Tìm kiếm..." class="search-box" />
        <span class="search-icon">🔍</span>
      </div>
    </div>
    <div class="user-actions">
      <span class="icon">🔔</span>
      <span class="icon">📨</span>
      <span class="icon">👤</span>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 8px 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.logo-search {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  color: #57CC99; 
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.search-container {
  position: relative;
}

.search-box {
  padding: 8px 12px 8px 32px;
  border-radius: 20px;
  border: none;
  background-color: #f0f2f5;
  width: 220px;
  font-size: 14px;
  transition: width 0.3s;
}

.search-box:focus {
  outline: none;
  background-color: white;
  border: 1px solid #1877f2; /* Viền xanh khi focus */
  box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.2);
  width: 240px;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #65676b;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.icon:hover {
  background-color: #e4e6eb;
}
</style>