<template>
  <div class="home">
    <div class="content">
      <h1 class="title">Welcome to the Wound Assessment App</h1>
      <p class="description">Use the navigation menu to explore the app.</p>
    </div>
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
  justify-content: center;
  align-items: center;
  height: 100vh; /* ใช้เต็มความสูงของ viewport */
  width: 100vw; /* ใช้เต็มความกว้างของ viewport */
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom right, #7ef294, #c6f7d0); /* Gradient สวยๆ */
  font-family: 'Arial', sans-serif;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden; /* ซ่อน scrollbar */
}

.content {
  max-width: 600px; /* Limit content width for better readability */
  padding: 20px;
  background: #ffffff;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #005f4b;
  margin-bottom: 15px;
}

.description {
  font-size: 1.2rem;
  color: #003366;
  font-weight: 300;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* เต็มหน้าจอ */
  overflow: hidden; /* ซ่อน scrollbar */
  box-sizing: border-box;
}
</style>
