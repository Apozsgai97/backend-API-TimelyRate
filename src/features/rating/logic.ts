import { Rating, RatingDb, RatingInput } from "./types";

export function countAverageRating({
  lesson1,
  lesson2,
  lesson3,
  lesson4,
}: RatingInput) {
  const average = (lesson1 + lesson2 + lesson3 + lesson4) / 4;
  return Math.round(average);
}
