import express from "express";
import { RatingDb } from "./types";

export function createRatingFeature(db: RatingDb) {
  return {
    getRouter() {
      const router = express.Router();

      router.get("/", async (req, res) => {
        res.json(await db.getAll());
      });

      return router;
    },
  };
}
