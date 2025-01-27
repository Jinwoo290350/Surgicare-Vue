<template>
  
  
  
  
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
          photo: "Pogus.jpg", // Ensure correct path
          bio: "Founder of Surgicare.",
        },
        {
          name: "Thanayot Monthichachat",
          role: "Co-founder",
          photo: "Zoe.jpg", // Ensure correct path
          bio: "Co-founder of Surgicare.",
        },
        {
          name: "Veerapong Haphutiwat",
          role: "Co-founder",
          photo: "Frank.jpg", // Ensure correct path
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
  padding: 30px;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.team-header {
  text-align: center;
  margin-bottom: 20px;
}

.team-header h1 {
  font-size: 3em;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-bottom: 4px solid #42b983;
  display: inline-block;
  padding-bottom: 10px;
}

.member-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.member-card {
  width: 250px;
  cursor: pointer;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.member-photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.member-card:hover .member-photo {
  transform: scale(1.05);
}

.member-info h2 {
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
  margin-top: 15px;
}

.member-info p {
  font-size: 1.1em;
  color: #666;
  margin-top: 5px;
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
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
}

.details-content h2 {
  font-size: 1.8em;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.details-content p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
}

button {
  padding: 12px 25px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
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
