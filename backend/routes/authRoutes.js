const router = require("express").Router();
const { register, login, getUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

/* url - 'http://localhost:5000/api/auth/register' */
router.post("/register", register);

/* url - 'http://localhost:5000/api/auth/login' */
router.post("/login", login);

/* 'http://localhost:5000/api/auth/user' */
router.get("/user", authMiddleware, getUser);

module.exports = router;
