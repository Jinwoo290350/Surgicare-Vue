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
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
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
  width: 320px;
  height: 450px;
  perspective: 1000px;
  z-index: 1;
  margin-top: -50px;
}

.member-card {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background: linear-gradient(145deg, #ffffff, #f3f3f3);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 30px;
  opacity: 0;
  transform: translateY(30px);
}

.member-card.active {
  z-index: 3;
  transform: translateX(0) translateY(0) scale(1.05);
  opacity: 1;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.member-card.next,
.member-card.prev {
  z-index: 2;
  transform: translateX(50%) scale(0.8);
  opacity: 0.7;
}

.member-card.next:hover,
.member-card.prev:hover {
  transform: translateX(50%) translateY(-10%) scale(0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  opacity: 0.85;
}

/* เพิ่ม Hover Effect */
.member-card:hover {
  transform: translateY(-10px) scale(1.07);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
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
  font-size: 1.8rem;
  color: #fff;
  background: linear-gradient(145deg, #42b983, #36a473);
  border: none;
  border-radius: 50%;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.nav-button.left {
  left: -60px;
}

.nav-button.right {
  right: -60px;
}

.nav-button:hover {
  background: linear-gradient(145deg, #36a473, #2e8c60);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: translateY(-50%) scale(1);
}

html, body {
  overflow-x: hidden;
}
</style>
