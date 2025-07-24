const verifyToken = require("./middleware/verifyToken");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (_req, res) => {
  res.send("API is running...");
});

// ----- SINGLE MongoDB connection -----
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // optional in newer versions
    serverSelectionTimeoutMS: 10000, // optional but helpful
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Start server
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Protected route – only works if client sends a valid JWT
app.get("/api/profile", verifyToken, (req, res) => {
  res.json({
    message: `Hello User ID: ${req.user}`,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
