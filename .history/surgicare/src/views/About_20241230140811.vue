<template>
    <div class="about">
      <h1> class = "title"> About This App</h1>
      <p> class="description"> This app helps with wound assessment and provides care advice.</p>
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
  position: absolute; /* Ensure it covers the entire viewport */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center content perfectly */
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #7ef294, #7ef294);
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
