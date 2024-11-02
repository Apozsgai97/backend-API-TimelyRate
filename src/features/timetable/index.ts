import express from "express"
import { TimetableDb } from "./types";


export function createTimetableFeature(db: TimetableDb){
  return {
   getRouter(){
    const router = express.Router()

    router.get("/", async (req, res) => {
     res.json( await db.getAll());
    })
    return router;
   }
  }
}