import React, { useState } from "react";

const Inspect = () => {
  const [isVerified, setIsVerified] = useState(false); // State to track verification status

  const handleVerify = () => {
    setIsVerified(true);
    alert("Tomato has been verified!");
  };

  const handleBuy = () => {
    alert("Buying tomato");
    // Implement buying logic here
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          maxWidth: "300px",
          padding: "20px",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <img
          src="images/tomato.jpg" // Replace with the actual image URL
          alt="Tomato"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h3 style={{ margin: "10px 0" }}>Tomato</h3>
        <p style={{ color: "#555" }}>Farmer: Ravi Kumar</p>
        <p style={{ color: "#777" }}>Location: Tomato</p>
        <p style={{ color: isVerified ? "green" : "red" }}>
          Verified: {isVerified ? "True" : "False"}
        </p>
        {!isVerified && (
          <button
            onClick={handleVerify}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Verify
          </button>
        )}
      </div>
    </div>
  );
};

export default Inspect;
