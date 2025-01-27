<template>
  <div id="team-page">
    <div class="team-header">
      <h1>Meet Our Team</h1>
    </div>

    <!-- Single Member Card with Navigation Buttons -->
    <div class="member-card-container">
      <button class="nav-button" @click="prevMember" :disabled="currentIndex === 0">
        ←
      </button>

      <div class="member-card">
        <img :src="currentMember.photo" :alt="`Photo of ${currentMember.name}`" class="member-photo" />
        <div class="member-info">
          <h2>{{ currentMember.name }}</h2>
          <p>{{ currentMember.role }}</p>
        </div>
      </div>

      <button class="nav-button" @click="nextMember" :disabled="currentIndex === members.length - 1">
        →
      </button>
    </div>

    <!-- Member Details Modal -->
    <div v-if="selectedMember" class="member-details" @click.self="closeDetails">
      <div class="details-content">
        <h2>{{ selectedMember.name }}</h2>
        <p><strong>Role:</strong> {{ selectedMember.role }}</p>
        <p>{{ selectedMember.bio }}</p>
        <button @click="closeDetails">Close</button>
      </div>
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
      selectedMember: null,
    };
  },
  computed: {
    currentMember() {
      return this.members[this.currentIndex];
    },
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
    selectMember(member) {
      this.selectedMember = member;
    },
    closeDetails() {
      this.selectedMember = null;
    },
  },
};
</script>

<style scoped>
#team-page {
  padding: 40px 20px;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-header {
  margin-bottom: 30px;
  text-align: center;
}

.team-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  border-bottom: 4px solid #42b983;
  padding-bottom: 10px;
}

.member-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 400px;
}

.member-card {
  width: 100%;
  max-width: 300px;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 15px;
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
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #369a6c;
}

.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Modal Styles */
.member-details {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.details-content {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369a6c;
}
</style>
