import express from "express";
import { TimetableDb } from "./types";
import { z } from "zod";
import { Lessons } from "./types";

const lessonsSchema = z.object({
  lesson1: z.string().optional(),
  lesson2: z.string().optional(),
  lesson3: z.string().optional(),
  lesson4: z.string().optional(),
});

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
