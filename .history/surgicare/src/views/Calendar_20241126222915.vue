<template>
  <div class="calendar-page">
    <h1>Calendar</h1>
    <div class="calendar-container">
      <div class="month">September</div>
      <div class="weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div class="days">
        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
        <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
        <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
        <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
        <span>29</span><span>30</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
};
</script>

<style scoped>
.calendar-page {
  text-align: center;
  padding: 20px;
}

.calendar-container {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: inline-block;
  text-align: center;
}

.month {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.weekdays span {
  font-weight: bold;
  color: #555;
}

.days span {
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  transition: all 0.3s ease;
}

.days span:hover {
  background-color: #42b983;
  color: white;
  cursor: pointer;
}
</style>
