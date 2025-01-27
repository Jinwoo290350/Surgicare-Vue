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
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #3498db, #1abc9c); /* Gradient background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0 20px;
  transition: all 0.3s ease;
}

nav a {
  margin: 0 15px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  transition: all 0.3s ease;
}

nav a:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1); /* Subtle background on hover */
  border-radius: 5px;
}

nav a.router-link-exact-active {
  border-bottom: 3px solid #fff; /* Underline for active links */
}

nav .logo {
  height: 50px; /* Set logo size */
  width: auto;
  border-radius: 10px; /* Add rounded corners for a sleek look */
  transition: all 0.3s ease;
}

nav .logo:hover {
  transform: scale(1.1); /* Scale the logo slightly on hover */
}

@media (max-width: 768px) {
  nav a {
    font-size: 14px;
    padding: 8px 12px;
    margin: 0 10px;
  }

  nav {
    height: 50px;
    padding: 0 10px;
  }

  nav .logo {
    height: 40px; /* Adjust logo size on smaller screens */
  }
}
</style>
