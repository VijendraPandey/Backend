# Day 01 — Started Learning Backend Development (Node.js)

Today, I began my backend development journey using Node.js. This folder includes small experiments, beginner-friendly concepts, and practical code examples.

---

## 📌 What I Built and Learned

### 1. Basic JavaScript — `index.js`
- Practiced writing a simple JavaScript loop.  
- Helps understand fundamental syntax and running JS files via Node.  
📄 File: [`Day-01/index.js`](Day-01/index.js)

---

### 2. Using an npm Package — `app.js`
- Installed and used the `cat-me` package from npm.  
- Imported the package using `require()` and printed ASCII cats to the console.  
📄 File: [`Day-01/app.js`](Day-01/app.js)  
📄 Dependencies listed in: [`Day-01/package.json`](Day-01/package.json)

---

### 3. Simple HTTP Server — `server.js`
- Created a basic Node.js HTTP server that listens on **port 3000**.  
- The server responds with a short message whenever a request hits it.  
📄 File: [`Day-01/server.js`](Day-01/server.js)

---

## 🧠 What Is a Server?
A **server** is a computer/program that:

- Listens for requests (like “give me this page”)
- Processes them
- Sends back a response

Example:  
When you open Google → your browser sends a request → Google's servers send back the webpage.

A server is basically a *listener* and a *responder*.

---

## 🌐 What Is HTTP?
**HTTP (HyperText Transfer Protocol)** is the rule/protocol used by browsers and servers to communicate.

- Browser → sends an HTTP **request**  
- Server → sends an HTTP **response**

Example:  
`GET /home` → Browser requesting the home page.  
Server responds with HTML, JSON, or text.

HTTP is the language of the web.

---

## ▶️ How to Run

### 1. Install dependencies  
```bash
npm install
```
Reads from: [`Day-01/package.json`](Day-01/package.json)

### 2. Run the JavaScript loop example  
```bash
node Day-01/index.js
```

### 3. Try the npm package example  
```bash
node Day-01/app.js
```

### 4. Start the HTTP server  
```bash
node Day-01/server.js
```

---

## 📂 Files in This Folder
- [`Day-01/readme.md`](Day-01/readme.md)
- [`Day-01/index.js`](Day-01/index.js) — simple JS loop example  
- [`Day-01/app.js`](Day-01/app.js) — demonstrates using the `cat-me` package  
- [`Day-01/server.js`](Day-01/server.js) — contains the HTTP `server` instance  
- [`Day-01/package.json`](Day-01/package.json) — project dependencies  

---

## 📘 Package vs Module in Node.js

### **Module**
- A **module** is any JavaScript file in a Node.js project.  
- Every `.js` file is a module.  
- You load modules using:  
```js
const something = require('./file.js');
```
- Examples: `index.js`, `server.js`, `app.js`.

### **Package**
- A **package** is a folder with one or more modules + a `package.json`.  
- Installed via npm (example: `cat-me`).  
- Stored in `node_modules/`.  
- Install using:  
```bash
npm install cat-me
```
- Import using:  
```js
const catMe = require('cat-me');
```

#### **Quick Difference**
| Feature | Module | Package |
|--------|--------|---------|
| Definition | A single JS file | A collection of modules with `package.json` |
| Location | Your project | npm registry / node_modules |
| Usage | `require('./file')` | `require('package-name')` |
| Example | `server.js` | `cat-me` |

---
