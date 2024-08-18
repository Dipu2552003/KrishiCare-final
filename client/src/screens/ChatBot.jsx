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
    <div className="flex flex-col h-screen w-full max-w-screen-2xl mx-auto p-4 bg-gray-100">
      {/* Chat Input Section at the Top */}
      <div className="mb-4 flex">
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

      {/* Suggestions Section */}
      <div className="mb-4 flex space-x-2">
        {[
          "What are my remaining tasks for today?",
          "How can I increase my crop yield?",
          "What is organic farming?",
          "How can I improve my soil quality?",
        ].map((suggestion, index) => (
          <button
            key={index}
            onClick={() => setInput(suggestion)}
            className="px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Message Display Section */}
      <div className="flex-1 overflow-y-auto p-6 rounded-lg ">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
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
    </div>
  );
};

export default ChatBot;
