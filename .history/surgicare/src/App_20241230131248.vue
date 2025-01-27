<template>
  <div id="app">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo-section">
        <img src="/Users/frank/Vscode/Vue/surgicare/public/Icon_surgicare.png" alt="Logo" class="logo" />
        <h1>SurgiCare</h1>
      </div>
      <nav class="sidebar-nav">
        <router-link to="/" class="nav-item">
          <i class="icon-home"></i>
          <span>Dashboard</span>
        </router-link>
        <router-link to="/transactions" class="nav-item">
          <i class="icon-transactions"></i>
          <span>Transactions</span>
        </router-link>
        <router-link to="/accounts" class="nav-item">
          <i class="icon-accounts"></i>
          <span>Accounts</span>
        </router-link>
        <router-link to="/investments" class="nav-item">
          <i class="icon-investments"></i>
          <span>Investments</span>
        </router-link>
        <!-- Add more navigation items as needed -->
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Top Navigation -->
      <header class="top-nav">
        <h2>Overview</h2>
        <div class="search-and-profile">
          <input type="text" placeholder="Search for something" class="search-bar" />
          <div class="icons">
            <i class="icon-settings"></i>
            <i class="icon-notifications"></i>
            <img src="/Users/frank/Vscode/Vue/surgicare/public/Pogus.jpg" alt="Profile" class="profile-pic" />
          </div>
        </div>
      </header>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Reset body and container */
#app {
  display: flex;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #2c3e50;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
}

.logo-section {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  height: 50px;
  border-radius: 10px;
}

.sidebar-nav {
  flex-grow: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item i {
  margin-right: 10px;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #e0f7fa, #e8f5e9); /* Background gradient */
  padding: 20px;
}

/* Top Navigation */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.top-nav h2 {
  margin: 0;
  font-size: 24px;
}

.search-and-profile {
  display: flex;
  align-items: center;
}

.search-bar {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 8px 15px;
  margin-right: 20px;
  width: 300px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icons i {
  font-size: 20px;
  color: #2c3e50;
}

.profile-pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #2c3e50;
}
</style>
