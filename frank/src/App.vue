<template>
  <div id="app">
    <WoundAssessment />
  </div>
</template>

<script>
import WoundAssessment from "./components/WoundAssessment.vue";

export default {
  name: "App",
  components: {
    WoundAssessment,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>