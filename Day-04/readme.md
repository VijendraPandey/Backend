# Day-04 – Express + MongoDB (Mongoose)

Day-04 is about building CRUD APIs using Express and MongoDB (via Mongoose) to manage notes.

---

## 🚀 What I Learned Today

### ✔ Full CRUD Operations with MongoDB
- GET /notes → Fetch all notes
- POST /notes → Create a new note in the database
- DELETE /notes/:id → Delete a note using its ID
- PATCH /notes/:id → Update an existing note using its ID

### ✔ What is Schema & Model? (Mongoose Basics)
- **Schema** → Defines the structure of data in a collection  
  Example: A Note must contain a title and content
- **Model** → A usable object created from Schema to interact with the database  
  Example: model methods like `find()`, `create()`, `delete()`, etc.

### ✔ MongoDB + Mongoose Integration
- Created Note Schema and Model in src/models/note.model.js
- Used important Mongoose functions:
  - find()
  - create()
  - findByIdAndDelete()
  - findByIdAndUpdate()

### ✔ Improved Folder Structure
- Separated database logic (db.js)
- Separated Mongoose model (note.model.js)

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Backend runtime environment |
| Express.js | API and routing framework |
| MongoDB Atlas | Cloud NoSQL database |
| Mongoose | ODM to connect and interact with MongoDB |

---

## 📂 Project Structure

    day-04
    ├── package.json
    ├── server.js
    └── src
        ├── db
        │   └── db.js
        └── models
            └── note.model.js

---

## ▶ How to Run the Project

Install dependencies:
    npm install

Start the server:
    npm start

Server will run at:
    http://localhost:3000

---

## 🔥 API Endpoints

| Method | Route | Description |
|--------|------|-------------|
| GET | / | Test route |
| GET | /notes | Get all notes |
| POST | /notes | Create a new note |
| DELETE | /notes/:id | Delete note by ID |
| PATCH | /notes/:id | Update note by ID |

---

## 📌 Sample Request Bodies

POST /notes
    {
      "title": "My First Note",
      "content": "Learning CRUD with MongoDB!"
    }

PATCH /notes/:id
    {
      "title": "Updated Note Title",
      "content": "Updated Content"
    }

---

## 📚 Summary

Today I learned how to:
- Build and structure CRUD API routes in Express
- Connect a Node.js app to MongoDB using Mongoose
- Understand Schema (data structure) and Model (database object)
- Organize backend files in a scalable way

I now have a strong foundation in backend development! 🚀
