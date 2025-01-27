<template>
  <div id="app" class="app-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">SurgiCare</div>
      <ul class="menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Transactions</a></li>
        <li><a href="#">Accounts</a></li>
        <li><a href="#">Investments</a></li>
        <li><a href="#">Credit Cards</a></li>
        <li><a href="#">Loans</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">My Privileges</a></li>
        <li><a href="#">Setting</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Header -->
      <header class="header">
        <h1>Overview</h1>
        <div class="header-tools">
          <input type="text" placeholder="Search for something" class="search-box" />
          <button class="settings-btn" title="Settings">⚙️</button>
          <button class="notifications-btn" title="Notifications">🔔</button>
          <img src="https://via.placeholder.com/40" alt="Profile" class="profile-pic" />
        </div>
      </header>

      <!-- Content Area -->
      <div class="content-area">
        <!-- Placeholder for now -->
        <div class="placeholder">Main Content Goes Here</div>
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
  font-family: 'Roboto', Arial, sans-serif;
  color: #333;
}

/* Sidebar */
.sidebar {
  width: 300px;
  background: #003366;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #ffffff;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  margin-bottom: 20px;
}

.menu a {
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s;
}

.menu a:hover {
  color: #66ccff;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #e6f7f9, #ffffff);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid #ddd;
  background: #ffffff;
}

.header h1 {
  margin: 0;
  font-size: 24px;
  color: #003366;
}

.header-tools {
  display: flex;
  align-items: center;
}

.search-box {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 15px;
  width: 250px;
}

.settings-btn,
.notifications-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
  color: #003366;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #003366;
}

.content-area {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.placeholder {
  width: 80%;
  height: 80%;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #666;
}
</style>
