const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");

const jwtSecret = process.env.JWT_SECRET || "YQR8JQ9CY";

/**
 * @param {String} username
 * @param {String} password
 * @returns {JSON} {
 *   "message": "Registration successful.",
 *   "token": "<token>"
 * }
 * *Password must be of atleast 8 characters.
 */
const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check whether inputs are empty or not
    if (!username || !password) {
      res.status(400).json({ message: "Please fill required fields." });
    }

    // If password's length is less than 8
    password.length < 8 &&
      res
        .status(400)
        .json({ message: "Password must be of atleast 8 characters." });

    // Finds username in database
    const doesUserExists = await User.findOne({ username });
    if (doesUserExists) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hashes password with salt using bcrypt
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password, salt);

    // Save user in DB
    const user = new User({
      username,
      password: secPassword,
    });
    await user.save();

    // Data to be sent in token
    const userData = {
      id: user._id,
    };
    const token = jwt.sign(userData, jwtSecret);

    res.json({ message: "Registration successful.", token });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error." });
    console.error(err.message);
  }
};

/**
 * @param {String} username
 * @param {String} password
 * @returns {JSON} {
 *   "message": "Login successful.",
 *   "token": "<token>"
 * }
 * *Password must be of atleast 8 characters.
 */
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check whether inputs are empty or not
    if (!username || !password) {
      res.status(400).json({ message: "Please fill required fields." });
    }

    // If password's length is less than 8
    password.length < 8 &&
      res
        .status(400)
        .json({ message: "Password must be of atleast 8 characters." });

    // Finds username in database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "User doesn't exists." });
    }

    // Compares plain password with hashed password strored in DB
    const comparePass = await bcrypt.compare(password, user.password);
    !comparePass && res.status(401).json({ message: "Invalid credentials." });

    // Data to be sent in token
    const userData = {
      id: user._id,
    };
    const token = jwt.sign(userData, jwtSecret);

    res.json({ message: "Login successful.", token });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error." });
    console.error(err.message);
  }
};

/**
 * @param {Headers} Authorization
 * @returns {JSON}
 * *Add token in Authorization header
 */
const getUser = async (req, res) => {
  try {
    // Fetchs user's data using req.userId excluding password
    let user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Internal Server error." });
    console.error(err.message);
  }
};

module.exports = {
  register,
  login,
  getUser,
};
