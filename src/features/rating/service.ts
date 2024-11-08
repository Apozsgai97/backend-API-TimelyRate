import { RatingDb } from "./types";

export function createService(db: RatingDb){
 async function getAll() {
  return db.getAll();
 }

 async function Get(params:type) {
  
 }
}