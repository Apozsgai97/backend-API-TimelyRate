import { test } from "node:test";
import { countAverageRating } from "./logic";
import { deepEqual } from "node:assert/strict";

test("With four 5 ratings it gives back a five.", () => {
  const ratingInput = {
    lesson1: 5,
    lesson2: 5,
    lesson3: 5,
    lesson4: 5,
  };

  const result = countAverageRating(ratingInput);

  deepEqual(result, 5);
});

test("With ratings 4, 5, 5, 5 it gives back a five.", () => {
  const ratingInput = {
    lesson1: 4,
    lesson2: 5,
    lesson3: 5,
    lesson4: 5,
  };

  const result = countAverageRating(ratingInput);

  deepEqual(result, 5);
});

test("With ratings 4, 4, 5, 5 it still gives back a five.", () => {
  const ratingInput = {
    lesson1: 4,
    lesson2: 4,
    lesson3: 5,
    lesson4: 5,
  };

  const result = countAverageRating(ratingInput);

  deepEqual(result, 5);
});

test("With ratings 4, 4, 4, 5 it gives back a four.", () => {
  const ratingInput = {
    lesson1: 4,
    lesson2: 4,
    lesson3: 4,
    lesson4: 5,
  };

  const result = countAverageRating(ratingInput);

  deepEqual(result, 4);
});

