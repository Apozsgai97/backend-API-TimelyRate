import { createDb } from "./db";

export function createPancakesFeature() {
  const db = createDb();
  const service = createService(db);
  const router = createRouter(service);

  return{
   service,
   router
  }
}
