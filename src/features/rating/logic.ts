import { Rating, RatingDb, RatingInput } from "./types";

export function calculateAverageRating({
  lesson1,
  lesson2,
  lesson3,
  lesson4,
}: RatingInput) {
  const average = (lesson1 + lesson2 + lesson3 + lesson4) / 4;
  return Math.round(average);
}

export function addMessageForAverage(average: number) {
  let message;

  switch (average) {
    case 1:
      message =
        "Every step counts! Keep going, tomorrow’s a new chance to shine.";
      break;
    case 2:
      message = "Great start! Small improvements add up – keep up the effort!";
      break;
    case 3:
      message = "Nice work! You’re building momentum, keep growing each day!";
      break;
    case 4:
      message =
        "Strong focus! You’re on a great path, keep up the awesome work!";
      break;
    case 5:
      message =
        "Outstanding! You’re in the zone – keep reaching for the stars!";
      break;
  }

  return message;
}
