<template>
  <div class="home">
    <h1 class="title">Welcome to the Wound Assessment App</h1>
    <p class="description">Use the navigation menu to explore the app.</p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #f0f8ff, #e6f7ff);
  color: #003366;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 0;
}
</style>
