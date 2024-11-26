<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
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
  margin-top: 40px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #34495e;
}
</style>
