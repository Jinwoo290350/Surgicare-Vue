<template>
  <div class="calendar-days-view">
    <div class="calendar-header">
      <button @click="previousMonth" class="nav-button">&lt;</button>
      <h2>{{ currentMonthYear }}</h2>
      <button @click="nextMonth" class="nav-button">&gt;</button>
    </div>
    <div class="weekday-labels">
      <div v-for="day in weekDays" :key="day" class="weekday">
        {{ day }}
      </div>
    </div>
    <div class="calendar-grid">
      <div 
        v-for="day in calendarDays" 
        :key="day.date" 
        :class="[
          'calendar-day', 
          { 
            'current-month': day.isCurrentMonth,
            'today': day.isToday,
            'selected': day.date === selectedDate 
          }
        ]"
        @click="selectDate(day.date)"
      >
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDaysView',
  data() {
    return {
      currentDate: new Date(),
      selectedDate: null,
      weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  },
  computed: {
    currentMonthYear() {
      return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
    },
    calendarDays() {
      const days = [];
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
      
      // Add days from previous month
      const startingDay = firstDayOfMonth.getDay();
      for (let i = 0; i < startingDay; i++) {
        const prevMonthDate = new Date(firstDayOfMonth);
        prevMonthDate.setDate(firstDayOfMonth.getDate() - (startingDay - i));
        days.push({
          day: prevMonthDate.getDate(),
          date: prevMonthDate,
          isCurrentMonth: false,
          isToday: this.isToday(prevMonthDate)
        });
      }
      
      // Add days of current month
      for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
        days.push({
          day,
          date,
          isCurrentMonth: true,
          isToday: this.isToday(date)
        });
      }
      
      // Add days from next month to complete the grid
      const remainingSlots = 42 - days.length; // 6 rows * 7 days
      for (let i = 1; i <= remainingSlots; i++) {
        const nextMonthDate = new Date(lastDayOfMonth);
        nextMonthDate.setDate(lastDayOfMonth.getDate() + i);
        days.push({
          day: nextMonthDate.getDate(),
          date: nextMonthDate,
          isCurrentMonth: false,
          isToday: this.isToday(nextMonthDate)
        });
      }
      
      return days;
    }
  },
  methods: {
    isToday(date) {
      const today = new Date();
      return date.getDate() === today.getDate() &&
             date.getMonth() === today.getMonth() &&
             date.getFullYear() === today.getFullYear();
    },
    selectDate(date) {
      this.selectedDate = date;
      this.$emit('date-selected', date);
    },
    previousMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(), 
        this.currentDate.getMonth() - 1, 
        1
      );
    },
    nextMonth() {
      this.currentDate = new Date(
        this.currentDate.getFullYear(), 
        this.currentDate.getMonth() + 1, 
        1
      );
    }
  }
}
</script>

<style scoped>
.calendar-days-view {
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.nav-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.weekday-labels {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.calendar-day {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.calendar-day:hover {
  background-color: #f0f0f0;
}

.calendar-day.current-month {
  color: black;
}

.calendar-day:not(.current-month) {
  color: #aaa;
}

.calendar-day.today {
  background-color: #e0e0ff;
  font-weight: bold;
}

.calendar-day.selected {
  background-color: #4CAF50;
  color: white;
}
</style>