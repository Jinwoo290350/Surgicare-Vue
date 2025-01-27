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
#team-page {
  padding: 50px 30px; /* Adjust padding for a better layout */
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-header {
  margin-bottom: 40px; /* Increase space between header and cards */
}

.team-header h1 {
  font-size: 3.5em;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 5px solid #42b983;
  display: inline-block;
  padding-bottom: 10px;
  margin: 0 auto;
}

.member-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px; /* Add more space between cards */
  max-width: 1200px; /* Limit the width of the cards container */
  width: 100%;
}

.member-card {
  width: 280px; /* Slightly larger cards */
  cursor: pointer;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 20px; /* Increase padding for better spacing */
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-8px); /* Increase hover effect */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.member-photo {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.member-card:hover .member-photo {
  transform: scale(1.1);
}

.member-info h2 {
  font-size: 1.6em;
  font-weight: 600;
  color: #333;
  margin-top: 15px;
  text-align: center;
}

.member-info p {
  font-size: 1.2em;
  color: #666;
  margin-top: 8px;
  text-align: center;
}

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
  animation: fadeIn 0.3s ease-in-out;
  z-index: 1000;
}

.details-content {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  animation: slideIn 0.3s ease-out;
}

.details-content h2 {
  font-size: 2em;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
}

.details-content p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 25px;
}

button {
  padding: 14px 30px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369a6c;
}

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
