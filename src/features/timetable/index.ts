import express from "express"


export function createTimetableFeature(db: any){
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