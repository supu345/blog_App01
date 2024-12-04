const validator = require("validator");
const adminModel = require("../models/adminModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.admin_login = async (req, res) => {
  const { email, password } = req.body;
  const error = {};

  // Validation
  if (email && !validator.isEmail(email)) {
    error.email = "Please provide a valid email";
  }
  if (!email) {
    error.email = "Please provide your email";
  }
  if (!password) {
    error.password = "Please provide your password";
  }

  // If there are validation errors, return them
  if (Object.keys(error).length > 0) {
    return res.status(400).json({ errorMessage: error });
  }

  try {
    // Find admin by email
    const getAdmin = await adminModel.findOne({ email });

    if (!getAdmin) {
      return res.status(400).json({ errorMessage: "Email does not exist" });
    }

    // Check if password matches
    const isPasswordMatch = await bcrypt.compare(password, getAdmin.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ errorMessage: { error: "Password does not match" } });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: getAdmin._id,
        name: getAdmin.adminName,
        role: getAdmin.role,
        image: getAdmin.image,
      },
      process.env.SECRET,
      { expiresIn: "7d" }
    );

    // Set token in a cookie
    return res
      .status(200)
      .cookie("blog_token", token, {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      })
      .json({ successMessage: "Login Successfully", token });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ errorMessage: { error: "Password does not match" } });
  }
};
