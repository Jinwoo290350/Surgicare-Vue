<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
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
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42b983;
  padding: 15px 0;
  margin-bottom: 20px;
  position: sticky; /* เพื่อให้ nav ติดด้านบน */
  top: 0;
  z-index: 1000;
}

nav a {
  margin: 0 20px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #34495e;
  border-radius: 5px;
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: #1abc9c;
}

nav a.router-link-exact-active {
  background-color: #2ecc71;
  color: white;
}
</style>
