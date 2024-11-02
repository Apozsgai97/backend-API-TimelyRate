import express from "express";
import { createTimetableFeature } from "./features";
import { Timetable, TimetableDb } from "./features/timetable/types";
import timetables from "./features/timetable/timetables.json";

function createTimetableDb(): TimetableDb {
  const data: Timetable[] = timetables;
  return {
    getAll: async () => data,
    getDay: async (day: string) => {
     const oneDayTimetable = data.filter((e) => e.day === day);
     return oneDayTimetable[0];
    }
  };
}

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ status: "ready" });
  });

  const timetableDb = createTimetableDb();

  const timetableFeature = createTimetableFeature(timetableDb);

  app.use("/api/v1/timetable", timetableFeature.getRouter());

  return app;
}
