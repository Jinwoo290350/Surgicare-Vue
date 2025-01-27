#team-page {
  padding: 30px;
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
}

h1 {
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 40px;
  color: #333;
  text-transform: uppercase;
}

.member-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 10px;
}

.member-card {
  width: 250px;
  margin: 10px;
  cursor: pointer;
  border: 2px solid #eaeaea;
  border-radius: 12px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.member-photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.member-card:hover .member-photo {
  transform: scale(1.05);
}

.member-info h2 {
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
  margin-top: 15px;
}

.member-info p {
  font-size: 1.1em;
  color: #666;
  margin-top: 5px;
}

.member-details {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;
}

.details-content {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 320px;
  max-width: 80%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
}

.details-content h2 {
  font-size: 1.8em;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.details-content p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
}

button {
  padding: 12px 25px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #369a6c;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .member-cards {
    flex-direction: column;
    align-items: center;
  }

  .member-card {
    width: 80%;
    margin-bottom: 20px;
  }

  .member-info h2 {
    font-size: 1.2em;
  }

  .member-info p {
    font-size: 1em;
  }

  .details-content {
    width: 90%;
    max-width: 400px;
    padding: 20px;
  }

  button {
    width: 100%;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8em;
  }

  .member-cards {
    gap: 15px;
  }

  .member-card {
    width: 90%;
  }

  .details-content h2 {
    font-size: 1.5em;
  }

  .details-content p {
    font-size: 1em;
  }

  button {
    padding: 15px;
  }
}
