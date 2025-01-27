<template>
  <div id="app" class="app-container">
    <header class="header">
      <h1>Overview</h1>
      <div class="header-tools">
        <input type="text" placeholder="Search for something" class="search-box" />
        <button class="settings-btn">⚙️</button>
        <button class="notifications-btn">🔔</button>
        <img src="https://via.placeholder.com/40" alt="Profile" class="profile-pic" />
      </div>
    </header>

    <div class="content-wrapper">
      <aside class="sidebar">
        <img src="/Users/frank/Vscode/Vue/surgicare/public/Icon_surgicare.png" alt="Logo" class="logo" />
        <nav class="menu">
          <router-link to="/" class="menu-item">Home</router-link>
          <router-link to="/about" class="menu-item">About</router-link>
          <router-link to="/member" class="menu-item">Member</router-link>
          <router-link to="/wound-assessment" class="menu-item">Wound Assessment</router-link>
        </nav>
      </aside>

      <main class="main-content">
        <router-view class="router-view" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
};
</script>

<style scoped>
/* General Styles */
body {
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif;
  height: 100vh;
  overflow: hidden;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Header Styling */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header h1 {
  font-size: 24px;
  color: #004e92;
  margin: 0;
}

.header-tools {
  display: flex;
  align-items: center;
}

.search-box {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 25px;
  margin-right: 10px;
  outline: none;
  transition: box-shadow 0.3s;
}

.search-box:focus {
  box-shadow: 0 0 10px rgba(0, 78, 146, 0.5);
}

.settings-btn,
.notifications-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #555;
  margin-right: 10px;
  cursor: pointer;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #004e92;
}

/* Content Wrapper */
.content-wrapper {
  display: flex;
  flex: 1;
  margin-top: 70px; /* Offset for the header */
}

/* Sidebar Styling */
.sidebar {
  width: 250px;
  background: linear-gradient(to bottom, #004e92, #000428);
  color: white;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
  position: fixed;
  left: 0;
  top: 70px; /* Below the header */
  z-index: 1000;
}

.logo {
  width: 100%;
  max-width: 150px;
  margin-bottom: 20px;
}

.menu {
  width: 100%;
}

.menu-item {
  display: block;
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background 0.3s, transform 0.3s;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

/* Main Content */
.main-content {
  flex: 1;
  margin-left: 250px; /* Offset for the sidebar */
  padding: 20px;
  background: #f5f5f5;
  overflow-y: auto;
}

.router-view {
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
