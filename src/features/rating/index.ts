import express from "express";
import { Rating, RatingDb } from "./types";
import { v4 as uuidv4 } from "uuid";

export function createRatingFeature(db: RatingDb) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.get("/:id", async (req, res) => {
        const id = req.params.id;
        res.json(await db.getById(id));
      });

      router.post("/", async (req, res) => {
        const newId = uuidv4();

        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const weekdays = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const weekday = weekdays[date.getDay()];
        const newDate = `${year}-${month}-${day} ${weekday}`;

        const newRating: Rating = {
          id: newId,
          date: newDate,
          lessonRatings: {
            lesson1: req.body.lesson1,
            lesson2: req.body.lesson2,
            lesson3: req.body.lesson3,
            lesson4: req.body.lesson4,
          },
        };

        res.status(201).json(await db.addRating(newRating));
      });

      router.delete("/:id", async (req, res) => {
        const id = req.params.id;
        res.json(await db.deleteRating(id));
      });

      return router;
    },
  };
}
