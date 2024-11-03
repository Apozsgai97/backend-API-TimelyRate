import { test } from "node:test";
import { addMessageForAverage, calculateAverageRating } from "./logic";
import { deepEqual } from "node:assert/strict";

test("With four 5 ratings it gives back a five.", () => {
  const ratingInput = {
    lesson1: 5,
    lesson2: 5,
    lesson3: 5,
    lesson4: 5,
  };

  const result = calculateAverageRating(ratingInput);

  deepEqual(result, 5);
});

test("With ratings 4, 5, 5, 5 it gives back a five.", () => {
  const ratingInput = {
    lesson1: 4,
    lesson2: 5,
    lesson3: 5,
    lesson4: 5,
  };

  const result = calculateAverageRating(ratingInput);

  deepEqual(result, 5);
});

test("With ratings 4, 4, 5, 5 it still gives back a five.", () => {
  const ratingInput = {
    lesson1: 4,
    lesson2: 4,
    lesson3: 5,
    lesson4: 5,
  };

  const result = calculateAverageRating(ratingInput);

  deepEqual(result, 5);
});

test("With ratings 4, 4, 4, 5 it gives back a four.", () => {
  const ratingInput = {
    lesson1: 4,
    lesson2: 4,
    lesson3: 4,
    lesson4: 5,
  };

  const result = calculateAverageRating(ratingInput);

  deepEqual(result, 4);
});

test("With average 1 gets back the right message", () => {
  const average = 1;

  const result = addMessageForAverage(average);

  deepEqual(
    result,
    "Every step counts! Keep going, tomorrow’s a new chance to shine."
  );
});

test("With average 2 gets back the right message", () => {
  const average = 2;

  const result = addMessageForAverage(average);

  deepEqual(
    result,
    "Great start! Small improvements add up – keep up the effort!"
  );
});

test("With average 3 gets back the right message", () => {
  const average = 3;

  const result = addMessageForAverage(average);

  deepEqual(
    result,
    "Nice work! You’re building momentum, keep growing each day!"
  );
});

test("With average 4 gets back the right message", () => {
  const average = 4;

  const result = addMessageForAverage(average);

  deepEqual(
    result,
    "Strong focus! You’re on a great path, keep up the awesome work!"
  );
});

test("With average 5 gets back the right message", () => {
  const average = 5;

  const result = addMessageForAverage(average);

  deepEqual(
    result,
    "Outstanding! You’re in the zone – keep reaching for the stars!"
  );
});
