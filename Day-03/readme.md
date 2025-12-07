# Day-03: Notes Taking Mini Project

This is a simple Notes Taking mini-project built using **Node.js** and **Express.js**.

Currently, the project supports adding, reading, updating, and deleting notes using REST APIs.  
The notes are stored temporarily in memory.

---

## 📌 Features Implemented

✔ Add Notes using POST `/notes`  
✔ Get All Notes using GET `/notes`  
✔ Update a Note using PATCH `/notes/:index`  
✔ Delete a Note using DELETE `/notes/:index`

---

## 🚀 How to Run This Project

1️⃣ Install dependencies

    npm install

2️⃣ Start the server

    npx nodemon server.js

3️⃣ Server will start on:

    http://localhost:3000

---

## 📩 API Usage

### ➤ Get All Notes (GET `/notes`)

Example Request:

    GET http://localhost:3000/notes

Example Response:

    [
      {
        "title": "My First Note",
        "content": "This is a sample note"
      }
    ]

---

### ➤ Add a Note (POST `/notes`)

Request Body Example:

    {
      "title": "My First Note",
      "content": "This is a sample note"
    }

Response:

    {
      "message": "Note added successfully"
    }

---

### ➤ Update a Note (PATCH `/notes/:index`)

Example Request URL:

    PATCH http://localhost:3000/notes/0

Request Body Example:

    {
      "content": "Updated content"
    }

Response:

    {
      "message": "Note updated successfully"
    }

---

### ➤ Delete a Note (DELETE `/notes/:index`)

Example Request:

    DELETE http://localhost:3000/notes/0

Response:

    {
      "message": "Note deleted successfully"
    }

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  

---

## 📚 Concepts Learned

- **npx** → Runs Node packages without global installation  
- **nodemon** → Automatically restarts server on code changes  
- **REST API Methods** →  
  - `GET` → retrieve data  
  - `POST` → add data  
  - `PATCH` → update partial data  
  - `DELETE` → remove data  
- **req.body** → Read data sent in request body  
- **req.params** → Read dynamic values in URL (`/notes/:index`)  
- **req.query** → Read query parameters (`?search=note1`)  
- **express.json()** → Parse incoming JSON request bodies
