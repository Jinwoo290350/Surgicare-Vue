<template>
  <div class="about">
    <div class="content">
      <h1 class="title">About This App</h1>
      <p class="description">This app helps with wound assessment and provides care advice.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh; /* Full height for viewport */
  background: linear-gradient(to bottom right, #7ef294, #c6f7d0); /* Subtle gradient */
  font-family: 'Arial', sans-serif;
  text-align: center;
  box-sizing: border-box;
  padding: 0px;
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
</style>
