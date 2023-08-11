const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const attendanceRoutes = require('./routes/attendanceRoutes');


const app = express();
const port = process.env.PORT || 5000;

const dbURI =
  "mongodb+srv://nmp-asms:JJCPBUVqiCgsRYQO@cluster0.7qpwm1n.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());
app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
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

// Use the attendance routes middleware
app.use(attendanceRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});