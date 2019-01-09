const express = require("express");
const app = express();

// Serve static files from /public directory
app.use(express.static("public", {
  setHeaders: (res, path, start) => {
    // Serve wasm files with the correct MIME type
    if(path.endsWith(".wasm")){
      res.set("Content-Type", "application/wasm");
    }
  }
}));

// Start server
app.listen(2222, () => {
  console.log("Server running on Port 2222");
});
