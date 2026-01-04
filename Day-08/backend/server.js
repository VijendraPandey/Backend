require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/services/ai.service");
const { log } = require("console");

const PORT = process.env.PORT;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {

  console.log(`User connected`);

  socket.on("disconnect", () => {
    console.log(`User disconnected`);
  });

  socket.chatHistory = [];

  socket.on("ai-message", async (data) => {
    console.log(data);

    socket.chatHistory.push({
      role: "user",
      parts: [{ text: data }],
    });

    socket.emit("ai-typing");

    const reply = await generateResponse(socket.chatHistory);

    let accumulated = "";

    // 🔥 STREAM word-by-word
    for (const word of reply.split(" ")) {
      accumulated += word + " ";

      socket.emit("ai-message-stream", {
        chunk: word + " ",
      });

      await new Promise((r) => setTimeout(r, 40)); // smooth stream
    }

    socket.chatHistory.push({
      role: "model",
      parts: [{ text: accumulated.trim() }],
    });

    socket.emit("ai-message-done");
  });

  socket.on("reset-chat", () => {
    socket.chatHistory = [];

    socket.emit("ai-message-response", {
      reply: "Chat reset successfully",
    });
  });
});

httpServer.listen(PORT, () => {
  console.log(`HTTP Server is running at Port No.: ${PORT}`);
});
