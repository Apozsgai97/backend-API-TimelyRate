import { test } from "node:test";
import { countAverageRating } from "./logic";
import { deepEqual } from "node:assert/strict";

test("With four 5 ratings it give back a five.", () => {
  const ratingInput = {
    lesson1: 5,
    lesson2: 5,
    lesson3: 5,
    lesson4: 5,
  };

  const result = countAverageRating(ratingInput);

  deepEqual(result, 5);
});
