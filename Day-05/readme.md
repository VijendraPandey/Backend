# 🎧 Day 05 — Moody Player

Moody Player is a full-stack AI-powered music recommendation app that suggests songs based on a user’s facial expression.  
The frontend detects emotions using face-api.js, while the backend uses Google GenAI (Gemini) to classify song mood during upload.

---

## 🎭 How It Works

### 1. Frontend detects your facial expression  
The webcam identifies one of the following:  
happy, sad, angry, neutral, surprised, fearful

### 2. Frontend requests mood-based songs  
`GET /songs?mood=<expression>`

### 3. Backend fetches matching songs from MongoDB  
Each song is stored with:  
- title  
- artist  
- audio URL  
- mood (detected via Gemini)

### 4. Uploading a new song  
Backend:
- uploads audio to ImageKit  
- asks Gemini to detect mood  
- saves the song  

---

## 📂 Project Structure

### Backend (`/backend`)

| File | Purpose |
|------|---------|
| server.js | Server entry point |
| src/app.js | Express initialization |
| src/routes/song.routes.js | GET /, GET /songs, POST /songs |
| src/service/storage.service.js | Handles ImageKit upload |
| src/db/db.js | MongoDB connection |
| src/models/song.model.js | Song schema |
| .env | Environment variables |

---

### Frontend (`/frontend`)

| File | Purpose |
|------|---------|
| App.jsx | Main layout |
| FaceExpressionDetector.jsx | Webcam + emotion detection |
| MoodSongs.jsx | Audio player + list |
| public/models | face-api.js required files |

---

## 🔌 API Endpoints

### ✔ GET `/`  
Returns all songs.

### ✔ GET `/songs?mood=<mood>`  
Returns songs filtered by mood.

**Postman example:**  
- Method: GET  
- URL: http://localhost:3000/songs?mood=happy

Query Params:  
mood = happy

---

### ✔ POST `/songs`  
Uploads audio + title + artist.  
Backend uploads to ImageKit → detects mood → stores song.

**Postman (Body → form-data):**

| Key | Type | Value |
|------|------|--------|
| title | text | My Song |
| artist | text | Some Artist |
| audio | file | choose file.mp3 |

---

## 🔐 Environment Variables (`backend/.env`)

    MONGODB_URL=your_mongodb_url
    IMAGE_KIT_PUBLIC_KEY=your_key
    IMAGE_KIT_PRIVATE_KEY=your_key
    IMAGE_KIT_URL_ENDPOINT=your_url
    GEMINI_API_KEY=your_key



---

## 🧰 Tech Stack

### Backend
- Node.js  
- Express  
- MongoDB (Mongoose)  
- Multer  
- ImageKit  
- Google GenAI  
- dotenv  
- cors  

### Frontend
- React + Vite  
- face-api.js  
- axios  

---

## 🧪 Features
- Real-time facial emotion detection  
- Gemini-powered mood classification  
- Cloud audio upload  
- REST API architecture  
- Custom audio UI  

---

## ▶️ Running the Project

### Backend
    cd backend
    npm install
    npm start

Runs on: http://localhost:3000

### Frontend
    cd frontend
    npm install
    npm run dev

Runs on: http://localhost:5173

---

## face-api.js Model Setup
Place all model files inside:

    frontend/public/models/

---

# 🎧 Moody Player  
AI that matches music to your emotions ✨
