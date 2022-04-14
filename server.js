const express = require("express");
const path = require("path");
// process.env.PORT is showing undefined for some reason, fix later for good logging.
//commented out the below line on 4/13 and I think it may have caused my app to crash on Heroku. reinstating line to try again
const PORT = process.env.PORT;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.listen(PORT, function() {
//   console.log(`API server now on port ${PORT}!`);
// });