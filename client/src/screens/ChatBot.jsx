import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  const handleVoiceInput = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
      handleSend(); // Send message when stopping the recognition
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  recognition.onstart = () => {
    setIsListening(true);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    setInput(transcript);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to the chat
    setMessages([...messages, { role: "user", content: input }]);

    try {
      // Send message to the backend
      const response = await axios.post("http://127.0.0.1:5000/api/chatbot", {
        input,
      });

      // Add chatbot response to the chat
      setMessages([
        ...messages,
        { role: "user", content: input },
        { role: "assistant", content: response.data.message },
      ]);

      // Clear input field
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto p-4 bg-gray-100 max-w-2xl">
      <div className="flex-1 overflow-y-auto p-4  bg-slate-100 rounded-lg shadow-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
        <button
          onClick={handleVoiceInput}
          className={`ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition ${
            isListening ? "bg-red-500" : "bg-gray-700"
          }`}
        >
          {isListening ? "Stop" : "Speak"}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
