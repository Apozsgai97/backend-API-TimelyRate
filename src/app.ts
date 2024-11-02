import express from "express";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ status: "ready" });
  });

  return app;
}