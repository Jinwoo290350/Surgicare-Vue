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

    <header class="header">
      <h1>Overview</h1>
      <div class="header-tools">
        <input type="text" placeholder="Search for something" class="search-box" />
        <button class="settings-btn">⚙️</button>
        <button class="notifications-btn">🔔</button>
        <img src="https://via.placeholder.com/40" alt="Profile" class="profile-pic" />
      </div>
    </header>

    <main class="content-area">
      <router-view class="router-view" />
    </main>
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
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(to bottom, #004e92, #000428);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

.logo {
  width: 100%;
  max-width: 150px;
  margin-bottom: 20px;
}

.menu a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  margin-bottom: 15px;
  display: block;
  text-align: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background 0.3s, transform 0.3s;
}

.menu a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.header {
  position: fixed;
  top: 0;
  left: 250px; /* Offset for the sidebar */
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

.content-area {
  margin-top: 0px; /* Offset for the fixed header */
  margin-left: 0px; /* Offset for the fixed sidebar */
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.router-view {
  width: 100%;
  height: 300%;
  background: linear-gradient(to bottom right, #e6f7f9, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.placeholder {
  width: 80%;
  height: 80%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #004e92;
  font-weight: bold;
  text-align: center;
}
</style>
