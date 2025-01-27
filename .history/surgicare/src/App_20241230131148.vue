<style>
/* Reset body and container */
#app {
  display: flex;
  height: 100vh;
  font-family: "Roboto", Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  width: 280px;
  background: #34495e;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
}

.logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: #ecf0f1;
}

.logo-section h1 {
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.sidebar-nav {
  flex-grow: 1;
  padding-top: 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #ecf0f1;
  text-decoration: none;
  margin: 5px 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.3s, transform 0.2s;
}

.nav-item:hover {
  background: rgba(236, 240, 241, 0.2);
  transform: translateX(5px);
}

.nav-item i {
  margin-right: 15px;
  font-size: 20px;
}

.nav-item span {
  display: inline-block;
  vertical-align: middle;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom right, #f5f7fa, #dff9fb); /* Smooth gradient */
  padding: 20px;
  overflow-y: auto;
}

/* Top Navigation */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
}

.top-nav h2 {
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  color: #34495e;
}

.search-and-profile {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-bar {
  border: 1px solid #bdc3c7;
  border-radius: 25px;
  padding: 8px 20px;
  width: 300px;
  font-size: 16px;
  color: #34495e;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.search-bar::placeholder {
  color: #95a5a6;
}

.icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icons i {
  font-size: 22px;
  color: #34495e;
  cursor: pointer;
  transition: color 0.2s ease;
}

.icons i:hover {
  color: #3498db;
}

.profile-pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #3498db;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.profile-pic:hover {
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .sidebar {
    width: 70px;
    padding: 10px;
  }

  .sidebar-nav {
    padding-top: 5px;
  }

  .nav-item {
    justify-content: center;
    padding: 10px;
    font-size: 14px;
  }

  .nav-item span {
    display: none;
  }

  .logo-section h1 {
    display: none;
  }

  .main-content {
    padding: 15px;
  }

  .search-bar {
    width: 200px;
  }
}
</style>
