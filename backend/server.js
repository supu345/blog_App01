const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const dbConnection = require("./config/dbConnection");
const authRouter = require("./routes/authRoutes");
const dashboardRouter = require("./routes/Dashboard/dashboardRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5040;

// Configure Multer storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/images", express.static("upload/images"));

// Routes
app.post("/api/v1/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const imageUrl = `http://localhost:${PORT}/images/${req.file.filename}`;
  res.json({ success: 1, image_url: imageUrl });
});

app.use("/api/v1", authRouter);
app.use("/api/v1", dashboardRouter);

// Database connection
dbConnection();

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
