const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config(); // For .env variables
const attendanceRoutes = require("./routes/attendanceRoutes");
const connectToDB = require("./helpers/dbConnect");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 5000;
const dbURI =
  process.env.MONGO_URL ||
  "mongodb+srv://nmp-asms:JJCPBUVqiCgsRYQO@cluster0.7qpwm1n.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // Origin - Frontend URL
    origin: [
      "http://localhost:3000", // For development
      // "https://example.com", // For production (when hosted)
    ],
  })
);

app.get("/api/test", (req, res) => {
  try {
    res.json({ message: "API is working!" });
  } catch (err) {
    res.json({ message: err.message });
    console.error(err.message);
  }
});

// Calculate salary route
app.post("/api/salary/calculate", async (req, res) => {
  const { employeeId, workingDays, halfWorkingDays } = req.body;

  try {
    // Fetch employee's salary details from the database (replace with your model)
    const employee = await Employee.findOne({ _id: employeeId });

    // Calculate basic pay (replace with your logic)
    const basicPay = employee.basicPay;

    // Calculate overtime, bonuses, and deductions (replace with your logic)
    const overtime = 0;
    const bonuses = 0;
    const deductions = 0;

    // Calculate total salary
    const totalSalary = basicPay + overtime + bonuses - deductions;

    res.json({ totalSalary });
  } catch (error) {
    res.status(500).json({ error: "Error calculating salary" });
  }
});

// Use these routes
app.use("/api/auth", authRoutes);

// Use the attendance routes middleware
app.use("http://localhost:5000/api/attendance", attendanceRoutes);

// Listens to the server only if DataBase is connected
connectToDB(dbURI)
  .then(() => {
    // After connection listens to port, else catches error
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Some error occured.\n", err.message);
  });
