// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB (local)
mongoose.connect("mongodb://localhost:27017/enquiryDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Define the form data structure (Schema)
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  event: String,
  message: String
});

// ✅ Create a model based on that schema
const Enquiry = mongoose.model("Enquiry", enquirySchema);

// ✅ Define a route to receive form data
app.post("/submit", async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving data." });
  }
});

// ✅ Start the server
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
