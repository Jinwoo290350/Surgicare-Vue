<template>
  <div id="team-page">
    <div class="team-header">
      <h1>Meet Our Team</h1>
    </div>
    <!-- Member Cards -->
    <div class="member-cards">
      <div
        class="member-card"
        v-for="(member, index) in members"
        :key="index"
        @click="selectMember(member)"
      >
        <img :src="member.photo" :alt="member.name" class="member-photo" />
        <div class="member-info">
          <h2>{{ member.name }}</h2>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </div>

    <!-- Member Details Modal -->
    <div v-if="selectedMember" class="member-details">
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
          bio: "Founder of Surgicare.",
        },
        {
          name: "Thanayot Monthichachat",
          role: "Co-founder",
          photo: "Zoe.jpg",
          bio: "Co-founder of Surgicare.",
        },
        {
          name: "Veerapong Haphutiwat",
          role: "Co-founder",
          photo: "Frank.jpg",
          bio: "Co-founder of Surgicare.",
        },
        {
          name: "Peerada Rattanawong",
          role: "Co-founder",
          photo: "bio.jpg",
          bio: "Co-founder of Surgicare.",
        },
      ],
      selectedMember: null,
    };
  },
  methods: {
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
/* Main Page Styles */
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
  font-size: 2.8em;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  border-bottom: 4px solid #42b983;
  padding-bottom: 10px;
  margin: 0 auto;
}

/* Member Cards */
.member-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
  gap: 20px;
  max-width: 1000px; /* Limit width for layout consistency */
  width: 100%;
}

.member-card {
  cursor: pointer;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.member-photo {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 15px;
  transition: transform 0.3s ease;
}

.member-card:hover .member-photo {
  transform: scale(1.1);
}

.member-info h2 {
  font-size: 1.3em;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.member-info p {
  font-size: 1em;
  color: #555;
  margin: 0;
}

/* Member Details Modal */
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
  animation: fadeIn 0.3s ease-in-out;
}

.details-content {
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  animation: slideIn 0.3s ease-out;
}

.details-content h2 {
  font-size: 1.8em;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.details-content p {
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369a6c;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
