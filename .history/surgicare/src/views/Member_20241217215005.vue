<template>
  <div id="team-page">
    <h1>Meet Our Team</h1>
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
        <p>{{ selectedMember.role }}</p>
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
          bio: "Founder of Surgicare",
        },
        {
          name: "Thanayot Monthichachat",
          role: "Co-founder",
          photo: "Zoe.jpg", 
          bio: "Co-founder of Surgicare",
        },
        {
          name: "Veerapong Haphutiwat",
          role: "Co-founder",
          photo: "Frank.jpg", 
          bio: "Co-founder of Surgicare",
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
    }
  }
};
</script>

<style scoped>
#team-page {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.member-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.member-card {
  width: 250px;
  margin: 10px;
  cursor: pointer;
  border: 2px solid #eee;
  border-radius: 8px;
  padding: 10px;
  transition: box-shadow 0.3s ease;
}

.member-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.member-photo {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.member-info h2 {
  font-size: 1.2em;
  color: #333;
}

.member-info p {
  font-size: 1em;
  color: #555;
}

.member-details {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.details-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369a6c;
}
</style>
