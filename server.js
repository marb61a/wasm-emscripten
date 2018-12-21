const express = require("express");
const app = express();

// Serve static files from /public directory
app.use(express.static("public"));

// Start server
app.listen(2222, () => {
  console.log("Server running on Port 2222");
});
