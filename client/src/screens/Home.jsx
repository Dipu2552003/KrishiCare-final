import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const [blogs] = useState([
    { title: 'Sustainable Farming Practices for 2024', image: 'https://images.news18.com/ibnlive/uploads/2024/06/farmers-2024-06-0bbe5be3a43c0016487ae75b6520f9ce.jpg?impolicy=website&width=640&height=480', content: 'Discover the latest in sustainable farming techniques that can help increase yield and reduce environmental impact.' },
    { title: 'फसल प्रौद्योगिकी में नवाचार', image: 'https://www.smsfoundation.org/wp-content/uploads/2021/04/Chalitar.jpg', content: 'Explore the newest technologies in crop management that can help boost productivity and efficiency on the farm.' },
    { title: 'Understanding Precision Agriculture', image: 'https://www.cimmyt.org/content/uploads/2019/03/Women-Group-Bihar-001.jpg', content: 'Learn how precision agriculture can revolutionize your farming practices with data-driven insights and targeted interventions.' },
  ]);

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
    <>
      <section id="home" className="overflow-auto min-h-screen max-w-full bg-gray-100">
        <div className="flex flex-col min-h-screen w-full max-w-screen-xl mx-auto p-4">
          {/* Chat Input Section */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg mb-2 sm:mb-0 sm:mr-2"
              placeholder="Type your message..."
            />
            <div className="flex gap-2">
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
              <button
                onClick={handleVoiceInput}
                className={`px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition ${
                  isListening ? "bg-red-500" : "bg-indigo-600"
                }`}
              >
                {isListening ? "Stop" : "Speak"}
              </button>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="mb-4 flex flex-wrap gap-2">
            {[
              "What are my remaining tasks for today?",
              "How can I increase my crop yield?",
              "What is organic farming?",
              "How can I improve my soil quality?",
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setInput(suggestion)}
                className="px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Message Display Section */}
          <div
            className="flex-none overflow-hidden p-4 sm:p-6 rounded-lg bg-white shadow-md mb-4"
            style={{ width: '100%', height: '300px' }} // Adjust height as needed
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}
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
          </div>

          {/* Blog Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-center">Share Knowledge and Stay Informed</h2>
            <div className="grid grid-cols-1 gap-4">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="relative w-full h-80"> {/* Adjust the height as needed */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                    <p className="text-gray-700">{blog.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
