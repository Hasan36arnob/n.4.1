import express from "express";

const app = express();
const PORT = 5000;

// This is a "Route". When you visit http://localhost:5000, it says hello.
app.get("/", (req, res) => {
  res.send("Server is ready and running!");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});