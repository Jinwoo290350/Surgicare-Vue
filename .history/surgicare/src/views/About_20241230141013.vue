<template>
  <div class="about">
    <h1 class="title">About This App</h1>
    <p class="description">This app helps with wound assessment and provides care advice.</p>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute; /* Center content absolutely */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Translate to perfect center */
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #7ef294, #c6f7d0);
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
  color: #005f4b; /* Darker green for the title */
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 0;
  color: #003366; /* Slightly darker for better readability */
}
</style>
