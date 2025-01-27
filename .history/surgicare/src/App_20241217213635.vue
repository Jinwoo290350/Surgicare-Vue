<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/member">Member</router-link>
      <router-link to="/wound-assessment">Wound Assessment</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px; /* เพิ่มพื้นที่ให้เนื้อหาขยับลงด้านล่าง */
}

nav {
  position: fixed; /* ยึดแถบด้านบนให้ติดกับหน้าเว็บ */
  top: 0;
  left: 0;
  width: 100%; /* ให้แถบยืดเต็มความกว้าง */
  height: 60px; /* ตั้งค่าความสูงของแถบ */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงาเล็กน้อย */
  z-index: 1000;
  background-color: white; /* เพิ่มสีพื้นหลัง */
}

nav a {
  margin: 0 15px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  transition: all 0.3s ease;
}

nav a:hover {
  color: #1abc9c; /* เปลี่ยนสีข้อความเมื่อโฮเวอร์ */
}

nav a.router-link-exact-active {
  border-bottom: 2px solid #42b983; /* เพิ่มเส้นใต้แสดงหน้าปัจจุบัน */
}

/* Media Query for Small Screens (Mobile) */
@media (max-width: 768px) {
  nav a {
    font-size: 14px; /* ลดขนาดฟอนต์ลงสำหรับหน้าจอขนาดเล็ก */
    padding: 8px 12px; /* ลด padding เพื่อให้พอดีกับหน้าจอ */
    margin: 0 10px; /* ลด margin */
  }

  nav {
    height: 50px; /* ลดความสูงของแถบ */
  }
}
</style>
