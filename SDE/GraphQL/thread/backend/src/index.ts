import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
  res.json({
    message: "server is up and running ",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}` + ` http://localhost:${PORT}`);
});
