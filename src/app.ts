import express from "express";
import { createTimetableFeature } from "./features";
import { Timetable, TimetableDb, Lessons } from "./features/timetable/types";
import timetables from "./features/timetable/timetables.json";
import { createRatingFeature } from "./features/rating";

function createTimetableDb(): TimetableDb {
  const data: Timetable[] = timetables;
  return {
    getAll: async () => data,
    getDay: async (day: string) => {
      const oneDayTimetable = data.filter((e) => e.day === day);
      return oneDayTimetable[0];
    },
    updateLessons: async (day: string, newLessons: Lessons) => {
      const oneDayTimetable = data.filter((e) => e.day === day);
      const allowedLessons: (keyof Lessons)[] = [
        "lesson1",
        "lesson2",
        "lesson3",
        "lesson4",
      ];

      allowedLessons.forEach((lesson) => {
        if (newLessons[lesson] !== undefined) {
          oneDayTimetable[0].lessons[lesson] = newLessons[lesson];
        }
      });
      return oneDayTimetable[0];
    },
  };
}

function createRatingDb() {
  const data: any = [];
  return {
    getAll: async () => data,
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

  const ratingDb = createRatingDb();

  const ratingFeature = createRatingFeature(ratingDb);

  app.use("/api/v1/ratings", ratingFeature.getRouter());

  return app;
}
