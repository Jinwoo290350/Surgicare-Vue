<template>
  <div id="app" class="app-container">
    <aside class="sidebar">
      <img src="/Users/frank/Vscode/Vue/surgicare/public/Icon_surgicare.png" alt="Logo" class="logo" />
      <nav class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/member">Member</router-link>
        <router-link to="/wound-assessment">Wound Assessment</router-link>
      </nav>
    </aside>

    <main class="main-content">
      <!-- Header -->
      <header class="header">
        <h1>Overview</h1>
        <div class="header-tools">
          <input type="text" placeholder="Search for something" class="search-box" />
          <button class="settings-btn">⚙️</button>
          <button class="notifications-btn">🔔</button>
          <img src="https://via.placeholder.com/40" alt="Profile" class="profile-pic" />
        </div>
      </header>

      <!-- Content Area -->
      <div class="content-area">
        <!-- Placeholder for now -->
        <div class="placeholder"></div>
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",
};
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #f8f9fa;
  border-right: 1px solid #ddd;
  padding: 20px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: block;
  margin-bottom: 15px;
}

.menu a:hover {
  color: #007bff;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #e6f7f9, #ffffff);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  background: #ffffff;
}

.header h1 {
  margin: 0;
  font-size: 20px;
}

.header-tools {
  display: flex;
  align-items: center;
}

.search-box {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.settings-btn,
.notifications-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.content-area {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.placeholder {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
