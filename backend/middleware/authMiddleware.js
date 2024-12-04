const jwt = require("jsonwebtoken");

// module.exports.admin_middleware = async (req, res, next) => {
//   // Extract the token from the Authorization header
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

//   if (!token) {
//     return res
//       .status(401)
//       .json({ errorMessage: { error: "Please login first" } });
//   }

//   try {
//     // Decode and verify the token
//     const decodedToken = jwt.verify(token, process.env.SECRET);

//     // Add decoded token data to the request
//     req.adminId = decodedToken.id;
//     req.adminName = decodedToken.name;
//     req.role = decodedToken.role;

//     // Call next middleware/route handler
//     next();
//   } catch (err) {
//     // Invalid or expired token
//     return res
//       .status(401)
//       .json({ errorMessage: { error: "Invalid or expired token" } });
//   }
// };

module.exports.admin_middleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Extract the token

  if (!token) {
    return res.status(401).json({ errorMessage: "Please login first" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.adminId = decodedToken.id;
    req.role = decodedToken.role;
    console.log("Token verified:", decodedToken);
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return res.status(401).json({ errorMessage: "Invalid or expired token" });
  }
};

module.exports.user = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    req.userId = "";
    req.role = "";
    req.userName = "";
    next();
  } else {
    const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
    req.userId = deCodeToken.id;
    req.userName = deCodeToken.name;
    req.role = deCodeToken.role;
    next();
  }
};
module.exports.auth_user = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    res.status(404).json({ errorMessage: { error: "Please login first" } });
  } else {
    const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
    if (deCodeToken.role === "user" && deCodeToken.accessStatus === "unblock") {
      req.userId = deCodeToken.id;
      req.role = deCodeToken.role;
      req.userName = deCodeToken.name;
      next();
    } else {
      res.status(404).json({
        errorMessage: {
          error: "you can not access",
        },
      });
    }
  }
};

module.exports.auth_sub_admin = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    res.status(404).json({ errorMessage: { error: "Please login first" } });
  } else {
    const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
    if (
      deCodeToken.role === "sub admin" &&
      deCodeToken.accessStatus === "unblock"
    ) {
      req.adminId = deCodeToken.id;
      req.adminName = deCodeToken.name;
      req.role = deCodeToken.role;
      next();
    } else if (deCodeToken.role === "admin") {
      req.adminId = deCodeToken.id;
      req.adminName = deCodeToken.name;
      req.role = deCodeToken.role;
      next();
    } else {
      res.status(404).json({
        errorMessage: {
          error: "you can not access",
        },
      });
    }
  }
};
