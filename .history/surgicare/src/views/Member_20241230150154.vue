<template>
  <div id="team-page">
    <div class="team-header">
      <h1>Meet Our Team</h1>
    </div>

    <!-- Card Slider with Hover Interaction -->
    <div class="member-card-container">
      <button
        class="nav-button left"
        @mouseover="hoverDirection = 'prev'"
        @mouseleave="hoverDirection = null"
        @click="prevMember"
        :disabled="currentIndex === 0"
      >
        ←
      </button>

      <div class="card-stack">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="member-card"
          :class="{
            active: index === currentIndex,
            next: index === currentIndex + 1,
            prev: index === currentIndex - 1,
            'hovered-prev': hoverDirection === 'prev' && index === currentIndex - 1,
            'hovered-next': hoverDirection === 'next' && index === currentIndex + 1,
          }"
        >
          <img :src="member.photo" :alt="`Photo of ${member.name}`" class="member-photo" />
          <div class="member-info">
            <h2>{{ member.name }}</h2>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>

      <button
        class="nav-button right"
        @mouseover="hoverDirection = 'next'"
        @mouseleave="hoverDirection = null"
        @click="nextMember"
        :disabled="currentIndex === members.length - 1"
      >
        →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: "Naphat Sornwichai",
          role: "Founder",
          photo: "Pogus.jpg",
          bio: "Founder of Surgicare with a vision for better healthcare solutions.",
        },
        {
          name: "Thanayot Monthichachat",
          role: "Co-founder",
          photo: "Zoe.jpg",
          bio: "Co-founder with a passion for innovation in the medical field.",
        },
        {
          name: "Veerapong Haphutiwat",
          role: "Co-founder",
          photo: "Frank.jpg",
          bio: "Dedicated to improving lives through cutting-edge technology.",
        },
        {
          name: "Peerada Rattanawong",
          role: "Co-founder",
          photo: "bio.jpg",
          bio: "An advocate for collaboration and excellence in healthcare.",
        },
      ],
      currentIndex: 0,
      hoverDirection: null, // Tracks hover direction ('prev' or 'next')
    };
  },
  methods: {
    nextMember() {
      if (this.currentIndex < this.members.length - 1) {
        this.currentIndex++;
      }
    },
    prevMember() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
};
</script>

<style scoped>
/* Base Styles */
#team-page {
  padding: 30px 20px;
  font-family: 'Helvetica Neue', sans-serif;
  background: linear-gradient(to bottom, #f9f9f9, #e0f7f4);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.team-header {
  margin-bottom: 15px;
  text-align: center;
  padding: 50px 20px;
  background-color: #e0f7f4;
  border-bottom: 4px solid #42b983;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
}

.team-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
}

/* Card Container */
.member-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 700px;
}

.card-stack {
  position: relative;
  width: 300px;
  height: 400px;
  perspective: 1000px;
  z-index: 1;
}

.member-card {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease, z-index 0.3s ease;
  text-align: center;
  padding: 20px;
  opacity: 0;
}

.member-card.active {
  z-index: 3;
  transform: translateX(0) scale(1);
  opacity: 1;
}

.member-card.next {
  z-index: 2;
  transform: translateX(50%) scale(0.6);
  opacity: 0.6;
}

.member-card.prev {
  z-index: 2;
  transform: translateX(-50%) scale(0.6);
  opacity: 0.6;
}

.member-card.hovered-next {
  z-index: 1;
  transform: translateX(30%) translateY(-10%) scale(0.7);
  opacity: 0.8;
}

.member-card.hovered-prev {
  z-index: 1;
  transform: translateX(-30%) translateY(-10%) scale(0.7);
  opacity: 0.8;
}

.member-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 15px;
  border: 3px solid #42b983;
}

.member-info h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.member-info p {
  font-size: 1.1rem;
  color: #555;
}

.nav-button {
  font-size: 1.5rem;
  color: #fff;
  background-color: #42b983;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.nav-button.left {
  left: -60px;
}

.nav-button.right {
  right: -60px;
}

.nav-button:hover {
  background-color: #369a6c;
}

.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

html, body {
  overflow-x: hidden; 
}
</style>
