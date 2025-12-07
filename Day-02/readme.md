# Day-02: Express Server & API Learning

## Overview
This project demonstrates the fundamentals of building a web server using **Express.js**, a popular Node.js web framework. It covers the basics of routing, request/response handling, and creating simple APIs.

## Project Description
This is a beginner-friendly Express application that sets up a basic HTTP server with multiple routes. The server listens on port 3000 and responds to different endpoints with text responses.

## What I'm Learning

- **Express.js Basics**: How to create and configure an Express app  
- **Routing**: Adding GET routes for different URLs  
- **Request/Response Handling**: Reading incoming data and sending responses  
- **Server Setup**: Running an HTTP server on a specific port  
- **API Development**: Understanding how REST APIs work  

---

## 📝 Why Don’t We Use the `http` Module?
Node.js has a built-in `http` module, but it:

- Needs more code for simple tasks  
- Makes routing complicated  
- Has no built-in middleware  
- Becomes messy as the project grows  

**Express simplifies everything** and is beginner-friendly.

---

## 🧩 Why Do We Use Express?
Express gives you:

- Simple and clean routing  
- Middleware support  
- Less code, more readability  
- Faster development  
- Standard structure used in real-world apps  

It is built on top of the `http` module but makes things easier.

---

## 🔄 What Are `req` and `res`?

In an Express route:

```js
app.get('/', (req, res) => { ... });
```

- **req (Request)** → What the client sends  
  - URL  
  - Body  
  - Query params  
  - Headers  

- **res (Response)** → What the server sends back  
  - `res.send()`  
  - `res.json()`  
  - `res.status()`  

---

## 🌐 What Is an API?
**API (Application Programming Interface)**  
A method that allows two systems to communicate.

Example:  
Frontend → API → Backend → Database → Response

---

## 🧭 Types of APIs (Simple Explanation)

1. **REST API** – Most common, uses HTTP methods and JSON  
2. **SOAP API** – XML-based, strict structure  
3. **GraphQL API** – Client controls what data it wants  
4. **WebSocket API** – Real-time communication  

---

## 🔥 What Is a REST API?
REST = **Representational State Transfer**

REST APIs use:

- Standard URLs  
- HTTP methods (GET, POST, PUT, DELETE)  
- JSON responses  

Examples:

- `GET /users` → Fetch all users  
- `POST /users` → Add new user  

REST is simple, fast, and widely used.

---

## Available Routes

- **GET /** → Returns a welcome message  
- **GET /about** → Returns information about the application  

---

## Getting Started

### Prerequisites
- Node.js installed  
- npm installed  

### Installation

```bash
npm install
```

### Running the Server

```bash
node server.js
```

Server URL: **http://localhost:3000**

---

## Technologies Used
- **Express.js** (v5.1.0) – Web framework  
- **Node.js** – JavaScript runtime  

