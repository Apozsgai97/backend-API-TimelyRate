import express from "express";
import { createTimetableFeature } from "./features";

function createTimetableDb() {
 const data: any = [];
 return {
  getAll: async() => data,
 }
}

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ status: "ready" });
  });

  const timetableDb = createTimetableDb();

  const timetableFeature = createTimetableFeature(timetableDb);

  app.use("/api/v1/timetable", timetableFeature.getRouter())

  return app;
}
