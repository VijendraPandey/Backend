# MiniSocial — Fullstack Mini Social App (Day 07)

MiniSocial is a **fullstack social media mini-project** built on Day 07 to demonstrate a clean, production-style architecture with authentication, image uploads, AI-powered caption generation, and user-specific post feeds.

The project focuses on **separation of concerns**, **secure authentication**, and **real-world integrations** like cloud image storage and generative AI.

---

## ✨ Key Features

* User registration & login
* JWT-based authentication using **HttpOnly cookies**
* Protected routes (backend & frontend)
* Image upload with **multer (memory storage)**
* Image hosting via **ImageKit**
* AI-generated captions using **Google Gemini (GenAI)**
* User profile with personal post feed
* Clean MVC-style backend architecture

---

## 🧱 Project Structure

```
Day-07/
├── backend/
│   ├── server.js
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── post.controller.js
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   ├── services/
│   │   │   ├── ai.service.js
│   │   │   └── storage.service.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   └── post.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── post.routes.js
│   │   └── db/
│   │       └── db.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── axios.js
│   │   │   ├── auth.api.js
│   │   │   └── post.api.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   └── Profile.jsx
│   │   └── App.jsx
│   └── package.json
```

---

## 🛠 Tech Stack

### Backend

* **Node.js + Express**
* **MongoDB + Mongoose**
* **JWT Authentication** (HttpOnly cookies)
* **Multer** (in-memory file uploads)
* **ImageKit** (cloud image hosting)
* **Google Gemini (GenAI)** for AI captions

### Frontend

* **React + Vite**
* **Axios** (with credentials)
* **Context API** for auth state
* Protected routing

---

## 🔄 Application Flow

1. User registers using `/api/auth/register`
2. User logs in → JWT stored in **HttpOnly cookie**
3. Frontend fetches profile via `/api/auth/profile`
4. Authenticated user creates a post:

   * Image uploaded as `multipart/form-data`
   * Image sent to Gemini for caption generation
   * Image uploaded to ImageKit
   * Post stored in MongoDB
5. User profile displays uploaded posts

---

## 🔐 Environment Variables

Create a `.env` file inside `Day-07/backend`:

```env
MONGODB_URL=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
IMAGE_KIT_URL_ENDPOINT=your_imagekit_url
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
```

---

## ▶️ Running the Project Locally

### Backend

```bash
cd Day-07/backend
npm install
npm start
```

Backend runs on: `http://localhost:3000`

---

### Frontend

```bash
cd Day-07/frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

CORS and cookies are configured to work with credentials.

---

## 📡 API Overview

### Auth Routes

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register new user            |
| POST   | `/api/auth/login`    | Login user                   |
| GET    | `/api/auth/profile`  | Get user + posts (protected) |
| GET    | `/api/auth/logout`   | Logout user                  |

### Post Routes

| Method | Endpoint     | Description                        |
| ------ | ------------ | ---------------------------------- |
| POST   | `/api/posts` | Create post with image (protected) |

---

## 🧠 AI Captioning

* Uploaded images are converted to Base64
* Sent to **Google Gemini (GenAI)**
* AI-generated caption is attached to the post

This logic is handled inside `ai.service.js`.

---

## 🔒 Security Practices

* Passwords hashed using **bcrypt**
* JWT stored in **HttpOnly cookies**
* Protected routes using auth middleware
* No sensitive data exposed to frontend

---

## 📌 Summary

MiniSocial demonstrates how to build a **modern fullstack application** using real-world patterns:

* MVC backend structure
* Secure authentication
* Cloud services integration
* AI-powered features

Ideal as a learning project or foundation for a larger social platform.
