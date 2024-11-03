import express from "express";
import { RatingDb } from "./types";

export function createRatingFeature(db: RatingDb) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      router.get("/:id", async (req, res) => {
       const id = req.params.id;
       res.json(await db.getById(id))
      })

      return router;
    },
  };
}
