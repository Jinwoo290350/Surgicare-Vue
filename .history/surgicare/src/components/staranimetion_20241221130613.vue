<template>
    <div class="starfield">
      <div
        v-for="(star, index) in stars"
        :key="index"
        class="star"
        :style="{
          left: star.left,
          top: star.top,
          animationDelay: star.animationDelay
        }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stars: this.generateStars(100), // Generate 100 stars
      };
    },
    methods: {
      generateStars(numStars) {
        const stars = [];
        for (let i = 0; i < numStars; i++) {
          stars.push({
            left: `${Math.random() * 100}vw`, // Random position on the x-axis
            top: `${Math.random() * 100}vh`,  // Random position on the y-axis
            animationDelay: `${Math.random() * 5}s`, // Random delay for animation
          });
        }
        return stars;
      },
    },
  };
  </script>
  
  <style scoped>
  .starfield {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .star {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
    animation: twinkle 2s infinite ease-in-out;
  }
  
  @keyframes twinkle {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
  }
  </style>
  