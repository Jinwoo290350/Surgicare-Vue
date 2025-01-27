<template>
    <div id="member-page">
      <!-- Role Buttons -->
      <div class="role-buttons">
        <button @click="selectRole('admin')">Admin</button>
        <button @click="selectRole('user')">User</button>
        <button @click="selectRole('manager')">Manager</button>
        <button @click="selectRole('developer')">Developer</button>
      </div>
  
      <!-- Member Details -->
      <div v-if="selectedRole === 'admin'" class="role-details">
        <h2>Admin - John Doe</h2>
        <p>Email: johndoe@example.com</p>
        <p>Bio: Admin of the project, manages the overall operations.</p>
      </div>
  
      <div v-if="selectedRole === 'user'" class="role-details">
        <h2>User - Jane Smith</h2>
        <p>Email: janesmith@example.com</p>
        <p>Bio: Regular user, has access to the app functionalities.</p>
      </div>
  
      <div v-if="selectedRole === 'manager'" class="role-details">
        <h2>Manager - Michael Brown</h2>
        <p>Email: michaelbrown@example.com</p>
        <p>Bio: Manages the team, handles task assignments.</p>
      </div>
  
      <div v-if="selectedRole === 'developer'" class="role-details">
        <h2>Developer - Sarah Lee</h2>
        <p>Email: sarahlee@example.com</p>
        <p>Bio: Developer working on app features and bug fixes.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Member",
    data() {
      return {
        selectedRole: null, // stores the selected role
      };
    },
    methods: {
      // Method to select a role and display corresponding details
      selectRole(role) {
        this.selectedRole = role;
      }
    }
  };
  </script>
  
  <style scoped>
  #member-page {
    padding: 20px;
    text-align: center;
  }
  
  .role-buttons {
    margin-bottom: 20px;
  }
  
  .role-buttons button {
    padding: 10px 20px;
    font-size: 1.2em;
    margin: 10px;
    border: none;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .role-buttons button:hover {
    background-color: #369a6c;
  }
  
  .role-details {
    margin-top: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .role-details h2 {
    font-size: 2em;
    color: #333;
  }
  
  .role-details p {
    font-size: 1.2em;
    color: #555;
  }
  </style>
  