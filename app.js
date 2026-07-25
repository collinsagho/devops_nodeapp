const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("welcome to tech365, thanks you sir! I am grateful to you for your support and guidance. I will keep learning and improving my skills. Collins learn a lot today");
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
