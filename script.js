/* Reset and base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #0e0e0e;
  color: #f5f5f5;
  line-height: 1.6;
  padding: 20px;
}

a {
  text-decoration: none;
  color: #00f0ff;
}

a:hover {
  text-decoration: underline;
}

/* Hero section */
.hero {
  text-align: center;
  margin-bottom: 40px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #00f0ff;
  box-shadow: 0 0 10px #00f0ff50;
  margin-bottom: 15px;
}

h1 {
  font-size: 32px;
  margin-bottom: 5px;
}

h2 {
  font-size: 18px;
  color: #999;
  margin-bottom: 10px;
}

.social-buttons {
  margin-top: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 15px;
  margin: 5px;
  background-color: #111;
  border: 1px solid #00f0ff;
  border-radius: 6px;
  transition: background 0.3s ease;
  color: #00f0ff;
}

.btn:hover {
  background-color: #00f0ff;
  color: #000;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  max-width: 900px;
  margin: auto;
}

/* Cards */
.card {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.15);
}

.card h3 {
  margin-bottom: 10px;
  color: #00f0ff;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span {
  background: #111;
  border: 1px solid #00f0ff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #00f0ff;
}

/* Responsive */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    margin-bottom: 60px;
  }
}