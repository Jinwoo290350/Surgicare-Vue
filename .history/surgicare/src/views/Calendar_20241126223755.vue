<template>
  <div class="surgicare-app">
    <!-- Header Section -->
    <header class="header">
      <div class="logo">
        <img src="surgicare/src/assets/logo.png" alt="SurgiCare Logo" class="logo-img" />
        <h1>SurgiCare</h1>
      </div>
      <button class="notification-button">
        <img src="surgicare/src/assets/notification-icon.png" alt="Notifications" />
      </button>
    </header>

    <!-- Welcome Section -->
    <section class="welcome">
      <p>Welcome, Mr. Pogus.</p>
    </section>

    <!-- Calendar Section -->
    <section class="calendar-section">
      <div class="calendar-header">
        <span class="calendar-icon">🕒</span>
        <span class="calendar-title">Calendar</span>
      </div>
      <div class="calendar">
        <div class="month">September</div>
        <div class="weekdays">
          <span>Sun.</span><span>Mon.</span><span>Tue.</span><span>Wed.</span><span>Thu.</span><span>Fri.</span><span>Sat.</span>
        </div>
        <div class="days">
          <span class="past">28</span><span class="past">29</span><span class="past">30</span><span>1</span><span>2</span><span>3</span><span>4</span>
          <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
          <span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span>
          <span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span>
          <span class="active">26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>1</span><span>2</span>
        </div>
      </div>
    </section>

    <!-- Advice Section -->
    <section class="advice-section">
      <div class="advice">
        <div class="advice-icon">
          <img src="advice-icon.png" alt="Advice Icon" />
        </div>
        <p>Advice from AI</p>
      </div>
      <div class="recommendation">
        <p class="recommend-title">Recommend</p>
        <p class="recommend-text">Get enough sleep</p>
      </div>
    </section>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <button class="nav-item">
        <img src="chat-icon.png" alt="Chat with Doctor" />
        <span>Chat with Doctor</span>
      </button>
      <button class="nav-item">
        <img src="tracking-icon.png" alt="Symptoms Tracking" />
        <span>Symptoms Tracking</span>
      </button>
      <button class="nav-item active">
        <img src="home-icon.png" alt="Home" />
        <span>Home</span>
      </button>
      <button class="nav-item">
        <img src="ai-icon.png" alt="Ask AI" />
        <span>Ask AI</span>
      </button>
      <button class="nav-item">
        <img src="wound-icon.png" alt="Wound Assessment" />
        <span>Wound Assessment</span>
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SurgiCareApp",
};
</script>

<style scoped>
/* Overall Styling */
.surgicare-app {
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #d9f5fc, #b2e4f3);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

/* Header Styling */
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 40px;
  margin-right: 10px;
}

.notification-button img {
  width: 30px;
}

/* Welcome Section */
.welcome {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

/* Calendar Section */
.calendar-section {
  margin: 20px 0;
  width: 100%;
}

.calendar-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-icon {
  margin-right: 10px;
}

.calendar {
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.month {
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
  font-weight: bold;
}

.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 14px;
}

.weekdays span {
  font-weight: bold;
  color: #555;
}

.days span {
  padding: 5px;
  border-radius: 50%;
}

.days .past {
  color: #aaa;
}

.days .active {
  background: #4caf50;
  color: white;
}

/* Advice Section */
.advice-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.advice, .recommendation {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 10px;
  margin: 0 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.advice-icon img {
  width: 40px;
  margin-bottom: 5px;
}

.recommend-title {
  font-weight: bold;
  font-size: 16px;
}

.recommend-text {
  font-size: 14px;
  color: #555;
  text-align: center;
}

/* Bottom Navigation */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
  padding: 10px 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}

.nav-item img {
  width: 24px;
  margin-bottom: 5px;
}

.nav-item.active img {
  background: #4caf50;
  border-radius: 50%;
  padding: 5px;
}
</style>
