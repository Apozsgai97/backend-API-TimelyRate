import express from "express";
import { createTimetableFeature } from "./features";
import { Timetable, TimetableDb, Lessons } from "./features/timetable/types";
import timetables from "./features/timetable/timetables.json";
import { createRatingFeature } from "./features/rating";
import { Rating, RatingDb } from "./features/rating/types";
import ratings from "./features/rating/ratings.json";

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

function createRatingDb(): RatingDb {
  let data: Rating[] = ratings;
  return {
    getAll: async () => data,
    getById: async (id: string) => {
      const RatingById = data.filter((e) => e.id === id);
      return RatingById[0];
    },
    addRating: async (newRating: Rating) => {
      data.push(newRating);
      return data;
    },
    deleteRating: async (id: string) => {
      const ratingToDelete = data.find((rating) => {
        return rating.id === id;
      });
      if (!ratingToDelete) {
        return "Rating was not found";
      }
      data = data.filter((rating) => rating.id != id);

      return data;
    },
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
