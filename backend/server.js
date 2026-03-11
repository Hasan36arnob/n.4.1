import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the Brain (Backend)!" });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});