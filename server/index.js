// Import necessary modules
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse cookies
app.use(cookieParser());

// Dynamic public folder serving based on authentication
app.use("/api/:app/public", (req, res, next) => {
  const authCookie = req.cookies[`auth-${req.params.app}`];

  if (authCookie === "session-app1") {
    express.static(path.join(__dirname, "app1"))(req, res, next);
  } else if (authCookie === "session-app2") {
    express.static(path.join(__dirname, "app2"))(req, res, next);
  } else {
    res.status(401).send({ error: "Unauthorized" });
  }
});

// Authentication endpoint
app.get("/api/:app/authentication", (req, res) => {
  // Mocked authentication

  // Set an HTTP-only cookie
  res.cookie(`auth-${req.params.app}`, `session-${req.params.app}`, {
    httpOnly: true, // Ensures the cookie is only accessible via HTTP(S), not JavaScript
    secure: false, // Set to true if serving over HTTPS
    sameSite: "strict",
    path: `/api/${req.params.app}`,
  });

  res.status(200).send({ message: "Authenticated and cookie set" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
