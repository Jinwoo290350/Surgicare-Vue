<template>
  <div class="app">
    <div class="calendar-reminders">
      <!-- Calendar Section -->
      <div class="calendar">
        <div class="month-header">
          <span>กรกฎาคม 2023</span>
          <div>
            <button @click="prevMonth">❮</button>
            <button @click="nextMonth">❯</button>
          </div>
        </div>
        <div class="days">
          <span v-for="day in days" :key="day">{{ day }}</span>
        </div>
        <div class="dates">
          <span v-for="date in dates" :key="date" class="date">{{ date }}</span>
        </div>
      </div>

      <!-- Reminders Section -->
      <div class="reminders">
        <h3>Reminders</h3>
        <div v-for="reminder in reminders" :key="reminder.id" class="reminder">
          <div class="icon">
            <span :class="reminder.icon"></span>
          </div>
          <div class="details">
            <p>{{ reminder.title }}</p>
            <small>{{ reminder.time }}</small>
          </div>
          <input
            type="checkbox"
            v-model="reminder.enabled"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
      dates: Array.from({ length: 31 }, (_, i) => i + 1),
      reminders: [
        {
          id: 1,
          title: "Mom and dad's anniversary",
          time: "วันอาทิตย์, 3:00 am",
          icon: "heart-icon",
          enabled: true,
        },
        {
          id: 2,
          title: "Meeting with Jonas Stark",
          time: "วันอังคาร, 9:30 am",
          icon: "meeting-icon",
          enabled: false,
        },
        {
          id: 3,
          title: "Mia's birthday party",
          time: "วันเสาร์, 12:00 pm",
          icon: "birthday-icon",
          enabled: false,
        },
      ],
    };
  },
  methods: {
    prevMonth() {
      console.log("Previous month");
    },
    nextMonth() {
      console.log("Next month");
    },
  },
};
</script>

<style scoped>
.app {
  font-family: 'Arial', sans-serif;
  color: #fff;
  background-color: #2d2d2d;
  padding: 20px;
}

.calendar-reminders {
  display: flex;
}

.calendar {
  flex: 1;
  margin-right: 20px;
}

.month-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.days, .dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.days span {
  text-align: center;
  font-weight: bold;
}

.dates .date {
  text-align: center;
  padding: 5px;
  background-color: #444;
  border-radius: 4px;
}

.reminders {
  flex: 1;
  background-color: #3b3b3b;
  border-radius: 8px;
  padding: 15px;
}

.reminders h3 {
  margin-bottom: 15px;
}

.reminder {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.icon {
  margin-right: 10px;
  font-size: 20px;
}

.details {
  flex: 1;
}

input[type="checkbox"] {
  transform: scale(1.2);
}
</style>
