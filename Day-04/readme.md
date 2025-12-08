# Day-04 – Express + MongoDB (Mongoose)

This project is part of my daily learning series where I explore Node.js backend development.  
On Day-04, I learned how to set up Express, connect MongoDB using Mongoose, and create basic API routes.

---

## 🚀 What I Learned

### ✔ Setup Express Server
- Built a simple Express.js server
- Used express.json() to parse JSON body
- Created a GET route at `/` returning "Hello, World!"

### ✔ MongoDB Connection using Mongoose
- Installed and configured mongoose
- Created src/db/db.js for DB connection
- Successfully connected to MongoDB Atlas

### ✔ Basic POST Route
- Created POST /notes route which logs request body to console
- Learned how client data flows to backend

---

## 🛠 Technologies Used

| Technology | Purpose |
|-----------|---------|
| Node.js | Backend runtime |
| Express.js | API framework |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM to interact with MongoDB |

---

## 📂 Project Structure

    day-04
    ├── package.json
    ├── server.js
    └── src
        └── db
            └── db.js

---

## ▶ How to Run

Install dependencies:
    npm install

Start the application:
    npx nodemon server.js

Server running at:
    http://localhost:3000

---

## 🔥 API Endpoints

| Method | Route | Description |
|--------|------|-------------|
| GET | `/` | Returns a welcome message |
| POST | `/notes` | Logs request body to console |

Sample POST Body:
    {
      "title": "My First Note",
      "content": "Learning Express and MongoDB!"
    }

---
