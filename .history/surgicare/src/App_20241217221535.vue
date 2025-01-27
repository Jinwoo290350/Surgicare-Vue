<template>
  <div id="app">
    <nav>
      <!-- Logo Section -->
      <img src="/Users/frank/Vscode/Vue/surgicare/public/Icon_surgicare.png" alt="Logo" class="logo" />
      
      <!-- Navigation Links -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/member">Member</router-link>
      <router-link to="/wound-assessment">Wound Assessment</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between; /* Ensure space between the logo and links */
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: white;
  padding: 0 20px;
}

nav a {
  margin: 0 15px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  transition: all 0.3s ease;
}

nav a:hover {
  color: #1abc9c;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid #42b983;
}

/* Logo Styles */
nav .logo {
  height: 40px; /* Adjust the size of the logo */
  width: auto;
}

/* Media Query for Small Screens */
@media (max-width: 768px) {
  nav a {
    font-size: 14px;
    padding: 8px 12px;
    margin: 0 10px;
  }

  nav {
    height: 50px;
  }

  nav .logo {
    height: 30px; /* Reduce logo size for smaller screens */
  }
}
</style>
