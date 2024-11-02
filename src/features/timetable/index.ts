import express from "express";
import { TimetableDb } from "./types";

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
        const newLessons = req.body;
        res.json(await db.updateLessons(day, newLessons));
      });

      return router;
    },
  };
}
