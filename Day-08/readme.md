# Day 08 - Mini AI Chatbot with Short-Term Memory

A real-time AI chatbot built using Socket.IO, React, and Google Gemini, featuring short-term conversational memory, live streaming responses, and a polished chat UI.

This project is part of Day 08 of backend learning and focuses on real-time systems, state management, and AI context handling.

---

## 🚀 Features

- Real-time chat using Socket.IO
- Short-term memory (per user / per socket)
- Streaming AI responses (word-by-word)
- Typing indicator (“AI is typing…”)
- Message timestamps
- Dark mode toggle
- Reset chat functionality
- Proper socket lifecycle handling (no duplicate listeners)

---

## 🛠 Tech Stack

Frontend:
- React (Vite)
- socket.io-client

Backend:
- Node.js
- Express
- Socket.IO
- Google Gemini (@google/genai)
- dotenv

---

## 🧩 Project Structure

    backend/
      ├── src/
      │   ├── app.js
      │   └── services/
      │       └── ai.service.js
      ├── server.js
      └── .env

    frontend/
      ├── src/
      │   ├── App.jsx
      │   └── App.css
      └── main.jsx

---

## 🧠 How Short-Term Memory Works

The AI model itself is stateless.
Memory is managed by the backend application layer.

Each socket connection maintains its own in-memory chat history:

    socket.chatHistory = [];

Memory Flow:
1. User sends a message
2. Message is appended to socket.chatHistory
3. Full conversation history is sent to Gemini
4. AI response is generated and streamed
5. Final response is stored back in memory

Memory exists only for the lifetime of the socket connection.
Refreshing the page or disconnecting resets the memory.

---

## ✨ Streaming AI Responses

Instead of waiting for a complete response, the backend streams text chunks.

Backend emits:
- ai-typing
- ai-message-stream (multiple times)
- ai-message-done

Frontend behavior:
- Shows typing indicator
- Appends streamed text live
- Converts the stream into a final message bubble

This mimics ChatGPT-style streaming UIs.

---

## 🔄 Real-Time Communication Flow

Frontend sends a message:

    socket.emit("ai-message", input);

Frontend listens for streamed responses (registered once in useEffect):

    socket.on("ai-message-stream", ...)
    socket.on("ai-message-done", ...)

Backend receives message:

    socket.on("ai-message", ...)

Backend emits streamed response:

    socket.emit("ai-message-stream", { chunk });
    socket.emit("ai-message-done");

---

## ⚠️ Important Design Decisions

- Socket listeners are registered once using useEffect([])
- socket.emit is triggered only on user actions
- Streaming text is handled using useRef to avoid stale state
- Memory is per socket, not global
- No database is used (intentional for short-term memory learning)

---

## ▶️ Running the Project Locally

Backend setup:

    cd backend
    npm install

Create a .env file:

    PORT=3000
    GOOGLE_API_KEY=your_google_api_key

Run backend:

    node server.js

Frontend setup:

    cd frontend
    npm install
    npm run dev

Frontend runs on:

    http://localhost:5173

---

## 📚 Key Learnings from Day 08

- Difference between emit and on
- Why socket listeners must live in useEffect
- How AI memory is created using context
- Real-time streaming UI patterns
- Managing async state using useRef
