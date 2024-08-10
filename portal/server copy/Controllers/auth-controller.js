const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Home Page using router");
  } catch (error) {
    console.error("Home route error:", error);
    res.status(400).send("Error");
  }
};

const register = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { username, email, password, confirm_password } = req.body;

    // Validate request body
    if (!username || !email || !password || !confirm_password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create new user
    const userCreated = await User.create({
      username,
      email,
      password,
      confirm_password,
    });

    // Generate token
    const token = await userCreated.generateToken();

    res.status(201).json({
      msg: "User registered successfully",
      token,
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error("Register route error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Login handler
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    // Check if user exists
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Check password
    const isMatch = await userExist.comparePassword(password);
    if (isMatch) {
      const token = await userExist.generateToken();
      res.status(200).json({
        msg: "Login Success",
        token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login route error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { home, register, login };
