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
/* Your styles here (as shared above) */
</style>
