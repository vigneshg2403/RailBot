import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [message, setMessage] = useState("");
  const [whatsappNumbers, setWhatsappNumbers] = useState("");
  const [emails, setEmails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};
      dateTime;
      message;
      whatsappNumbers: whatsappNumbers.split(","); // Convert comma-separated numbers into an array
      emails: emails.split(","); // Convert comma-separated emails into an array
    

    try {
      await axios.post("http://localhost:5000/api/schedule", data);
      alert("Notification Scheduled Successfully!");
    } catch (error) {
      console.error("Error scheduling notification:", error);
    }
  };

  return (
    <div className="container">
      <h2>Schedule Notification</h2>
      <form onSubmit={handleSubmit}>
        <label>Pick Date & Time:</label>
        <DatePicker
          selected={dateTime}
          onChange={(date) => setDateTime(date)}
          showTimeSelect
          dateFormat="Pp"
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
        />

        <label>WhatsApp Numbers (comma-separated):</label>
        <input
          type="text"
          value={whatsappNumbers}
          onChange={(e) => setWhatsappNumbers(e.target.value)}
          placeholder="Ex: +919876543210, +1234567890"
          required
        />

        <label>Emails (comma-separated):</label>
        <input
          type="email"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          placeholder="Ex: example1@gmail.com, example2@gmail.com"
          required
        />

        <button type="submit">Schedule Notification</button>
      </form>
    </div>
  );
}

export default App;
