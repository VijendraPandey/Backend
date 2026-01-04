import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const socketRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const streamingRef = useRef("");

  useEffect(() => {
    const socketInstance = io("http://localhost:3000");
    socketRef.current = socketInstance;

    socketInstance.on("ai-typing", () => {
      setIsTyping(true);
    });

    socketInstance.on("ai-message-stream", (data) => {
      streamingRef.current += data.chunk;
      setStreamingText(streamingRef.current);
    });

    socketInstance.on("ai-message-done", () => {
      setIsTyping(false);

      const finalText = streamingRef.current;

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "model",
          text: finalText,
          timestamp: new Date(),
        },
      ]);

      streamingRef.current = "";
      setStreamingText("");
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleSend = () => {
    if (!input.trim() || !socketRef.current) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    socketRef.current.emit("ai-message", input);
    setInput("");
  };

  const handleReset = () => {
    if (!socketRef.current) return;
    setMessages([]);
    socketRef.current.emit("reset-chat");
  };

  return (
    <div className={`desktop-shell ${darkMode ? "dark" : ""}`}>
      <div className="chat-container">
        {/* HEADER */}
        <div className="chat-header">
          <div className="avatar">🤖</div>
          <div className="header-info">
            <div className="title">AI Assistant</div>
            <div className="subtitle">Online</div>
          </div>

          <div className="header-actions">
            <button onClick={handleReset} title="Reset chat">
              🔄
            </button>
            <button onClick={() => setDarkMode(!darkMode)} title="Toggle theme">
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="chat-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-row ${
                msg.role === "user" ? "right" : "left"
              }`}
            >
              <div className={`message ${msg.role}`}>
                {msg.text}
                <div className="timestamp">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message-row left">
              <div className="message model typing">
                {streamingText || "AI is thinking"}
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="send-btn" onClick={handleSend}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
