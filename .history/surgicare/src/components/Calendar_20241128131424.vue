<template>
    <div class="calendar-container">
      <div class="calendar-header">
        <button @click="prevMonth">❮</button>
        <span>{{ monthName }} {{ year }}</span>
        <button @click="nextMonth">❯</button>
      </div>
      <div class="calendar-grid">
        <div v-for="day in daysOfWeek" :key="day" class="calendar-day-name">{{ day }}</div>
        <div v-for="date in displayedDates" :key="date" class="calendar-date">
          {{ date }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        daysOfWeek: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
        currentDate: new Date(),
        displayedDates: [],
        monthNames: [
          'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
          'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ]
      };
    },
    computed: {
      monthName() {
        return this.monthNames[this.currentDate.getMonth()];
      },
      year() {
        return this.currentDate.getFullYear();
      }
    },
    methods: {
      updateCalendar() {
        const firstDayOfMonth = new Date(this.year, this.currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(this.year, this.currentDate.getMonth() + 1, 0);
        const numberOfDays = lastDayOfMonth.getDate();
        const firstDayIndex = firstDayOfMonth.getDay();
  
        this.displayedDates = Array(firstDayIndex).fill('').concat(
          Array.from({ length: numberOfDays }, (_, i) => i + 1)
        );
      },
      prevMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.updateCalendar();
      },
      nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.updateCalendar();
      }
    },
    created() {
      this.updateCalendar();
    }
  };
  </script>
  
  <style scoped>
  .calendar-container {
    text-align: center;
    margin: 20px auto;
  }
  
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    text-align: center;
  }
  
  .calendar-day-name, .calendar-date {
    padding: 10px;
    background-color: #f3f3f3;
    border-radius: 5px;
  }
  
  .calendar-date {
    background-color: #e1e1e1;
    cursor: pointer;
  }
  
  .calendar-date:hover {
    background-color: #ccc;
  }
  </style>
  