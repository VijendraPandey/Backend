# Day-03: Notes Taking Mini Project

This is a simple Notes Taking mini-project built using **Node.js** and **Express.js**.

Currently, the project supports adding new notes through a POST request. The notes are stored in memory temporarily.

In the upcoming days, the project will be enhanced with more features like:

- Fetching the list of notes (GET)
- Updating a note (PUT)
- Deleting a note (DELETE)

---

## 📌 Features Implemented

✔ Add Notes using POST `/notes`

---

## 🚀 How to Run This Project

1️⃣ Install dependencies

    npm install

2️⃣ Start the server

    npm start

3️⃣ Server will start on:

    http://localhost:3000

---

## 📩 API Usage

### ➤ Add a Note (POST `/notes`)

#### Request Body Example

    {
      "title": "My First Note",
      "content": "This is a sample note"
    }

---

### 🔹 Using Postman

1. Create a **POST** request  
2. URL → `http://localhost:3000/notes`  
3. Go to **Body** → Select **raw** → Choose **JSON**  
4. Enter JSON data like the example above  
5. Hit **Send**

---

## 📜 Response Example

    {
      "message": "Note added successfully",
      "notes": [
        {
          "title": "My First Note",
          "content": "This is a sample note"
        }
      ]
    }

---

## 🛠️ Tech Stack

- Node.js
- Express.js

---

## 📚 Concepts Learned

- **npx** → Runs Node packages without installing them globally.  
- **nodemon** → Automatically restarts the server when code changes.  
- **REST API Methods** →  
  - `GET` → Retrieve data  
  - `POST` → Send/add data  
  - `PUT` → Update data  
  - `DELETE` → Remove data  
- **req.body** → Used to access data sent in the request body (mainly in POST/PUT).  
- **req.params** → Used to get dynamic values from the route URL. Example: `/notes/:id`.  
- **req.query** → Used to receive URL query parameters like `?search=note1`.  
- **express.json()** → Middleware that converts incoming JSON request bodies into JavaScript objects so you can access them using `req.body`.

---
