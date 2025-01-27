<template>
  <div class="surgicare-app">
    <!-- Header Section -->
    <header class="header">
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="SurgiCare Logo" class="logo-img" />
        <h1>SurgiCare</h1>
      </div>
      <button class="notification-button" aria-label="Notifications">
        <img :src="require('@/assets/notification-icon.png')" alt="Notifications" />
      </button>
    </header>

    <!-- Welcome Section -->
    <section class="welcome">
      <p>Welcome, {{ userName }}!</p>
    </section>

    <!-- Calendar Section -->
    <section class="calendar-section">
      <div class="calendar-header">
        <span class="calendar-icon">🕒</span>
        <span class="calendar-title">Calendar</span>
      </div>
      <div class="calendar">
        <div class="month">{{ currentMonth }}</div>
        <div class="weekdays">
          <span v-for="day in weekdays" :key="day">{{ day }}</span>
        </div>
        <div class="days">
          <span 
            v-for="(day, index) in calendarDays" 
            :key="index"
            :class="{
              'past': day.isPast, 
              'active': day.isActive
            }"
          >
            {{ day.value }}
          </span>
        </div>
      </div>
    </section>

    <!-- Advice Section -->
    <section class="advice-section">
      <div class="advice">
        <div class="advice-icon">
          <img :src="require('@/assets/advice-icon.png')" alt="Advice Icon" />
        </div>
        <p>Advice from AI</p>
      </div>
      <div class="recommendation">
        <p class="recommend-title">Recommend</p>
        <p class="recommend-text">{{ aiRecommendation }}</p>
      </div>
    </section>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <button 
        v-for="(item, index) in navItems" 
        :key="index"
        class="nav-item" 
        :class="{ 'active': item.isActive }"
        @click="navigateTo(item.route)"
      >
        <img :src="item.icon" :alt="item.label" />
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SurgiCareApp',
  data() {
    return {
      userName: 'Patient',
      currentMonth: 'September',
      aiRecommendation: 'Get enough sleep',
      weekdays: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
      calendarDays: [
        { value: 28, isPast: true },
        { value: 29, isPast: true },
        { value: 30, isPast: true },
        { value: 1, isPast: false },
        { value: 2, isPast: false },
        { value: 3, isPast: false },
        { value: 4, isPast: false },
        // ... rest of the days
        { value: 26, isActive: true },
        // ... remaining days
      ],
      navItems: [
        { 
          label: 'Chat with Doctor', 
          icon: require('/chat-icon.png'), 
          route: '/chat', 
          isActive: false 
        },
        { 
          label: 'Symptoms Tracking', 
          icon: require('/tracking-icon.png'), 
          route: '/symptoms', 
          isActive: false 
        },
        { 
          label: 'Home', 
          icon: require('/home-icon.png'), 
          route: '/', 
          isActive: true 
        },
        { 
          label: 'Ask AI', 
          icon: require('/ai-icon.png'), 
          route: '/ai', 
          isActive: false 
        },
        { 
          label: 'Wound Assessment', 
          icon: require('/wound-icon.png'), 
          route: '/wound', 
          isActive: false 
        }
      ]
    }
  },
  methods: {
    navigateTo(route) {
      // Implement navigation logic
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
/* Existing styles remain the same */
</style>