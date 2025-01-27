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
  padding: 40px 20px;
  font-family: 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #3b9f87, #7fffd4 70%, #e0f7fa); /* Modern gradient */
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1); /* Subtle shadow inside the BG */
}

.team-header {
  margin-bottom: 30px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-header h1 {
  font-size: 2.8rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  border-bottom: 4px solid #42b983;
  padding-bottom: 10px;
}

/* Card Container */
.member-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 600px;
}

.card-stack {
  position: relative;
  width: 300px;
  height: 400px;
  perspective: 1000px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Card Styles */
.member-card {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, opacity 0.3s ease, z-index 0.3s ease;
  text-align: center;
  padding: 20px;
  opacity: 0;
}

.member-card.active {
  z-index: 3;
  transform: translateX(0) scale(1);
  opacity: 1;
  background: linear-gradient(135deg, #fff, #f0f9ff);
}

.member-card.next {
  z-index: 2;
  transform: translateX(50%) scale(0.9);
  opacity: 0.6;
}

.member-card.prev {
  z-index: 2;
  transform: translateX(-50%) scale(0.9);
  opacity: 0.6;
}

.member-card.hovered-next {
  z-index: 3;
  transform: translateX(30%) translateY(-10%) scale(0.95);
  opacity: 0.8;
}

.member-card.hovered-prev {
  z-index: 3;
  transform: translateX(-30%) translateY(-10%) scale(0.95);
  opacity: 0.8;
}

/* Member Info */
.member-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.member-info h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

.member-info p {
  font-size: 1.2rem;
  color: #555;
}

/* Navigation Buttons */
.nav-button {
  font-size: 1.5rem;
  color: #fff;
  background: radial-gradient(circle at center, #42b983, #369a6c);
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.nav-button.left {
  left: -50px;
}

.nav-button.right {
  right: -50px;
}

.nav-button:hover {
  background: radial-gradient(circle at center, #369a6c, #42b983);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .team-header h1 {
    font-size: 2.2rem;
  }

  .nav-button {
    font-size: 1.2rem;
    padding: 10px;
  }

  .member-info h2 {
    font-size: 1.5rem;
  }

  .member-info p {
    font-size: 1rem;
  }
}
</style>
