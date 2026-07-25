const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("welcome to tech365, Agho is here, thanks. Great");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    application: "nodejs-cicd-app",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application is running on port ${PORT}`);
});
