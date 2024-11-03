import express from "express";
import { TimetableDb } from "./types";
import { Lessons } from "./types";
import { lessonsSchema } from "./input";

export function createTimetableFeature(db: TimetableDb) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.get("/:day", async (req, res) => {
        const day = req.params.day;
        res.json(await db.getDay(day));
      });

      router.put("/:day", async (req, res) => {
        const day = req.params.day;
        const parsedLessons = lessonsSchema.safeParse(req.body);
        if (!parsedLessons.success) {
          res.status(400).json(parsedLessons.error.issues[0].message);
          return;
        }
        const newLessons: Lessons = parsedLessons.data;
        res.json(await db.updateLessons(day, newLessons));
      });

      return router;
    },
  };
}
