import { Rating, RatingDb } from "./types";
import ratings from "./ratings.json";

export function createDb(): RatingDb {
  let data: Rating[] = ratings;
  return {
    getAll: async () => data,
    getById: async (id: string) => {
      const RatingById = data.filter((e) => e.id === id);
      return RatingById[0];
    },
    addRating: async (newRating: Rating) => {
      data.push(newRating);
      return data;
    },
    deleteRating: async (id: string) => {
      const ratingToDelete = data.find((rating) => {
        return rating.id === id;
      });
      if (!ratingToDelete) {
        return "Rating was not found";
      }
      data = data.filter((rating) => rating.id != id);

      return data;
    },
  };
}
