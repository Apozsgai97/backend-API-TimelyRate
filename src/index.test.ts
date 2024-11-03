import test from "node:test";
import { createApp } from "./app";
import request from "supertest";
import { deepEqual } from "node:assert";
import timetables from "./features/timetable/timetables.json";
import ratings from "./features/rating/ratings.json";


test("GET /", async () => {
  const app = createApp();

  const result = await request(app).get("/");

  deepEqual(result.status, 200);
  deepEqual(result.body, { status: "ready" });
});

test("GET /api/v1/timetable", async () => {
  const app = createApp();

  const result = await request(app).get("/api/v1/timetable");

  deepEqual(result.status, 200);
  deepEqual(result.body, timetables);
});

test("GET /api/v1/timetable/monday", async () => {
  const app = createApp();

  const result = await request(app).get("/api/v1/timetable/monday");

  deepEqual(result.status, 200);
  deepEqual(result.body, timetables[0]);
});

test("PUT /api/v1/timetable/monday", async () => {
  const app = createApp();

  const postResult = await request(app).put("/api/v1/timetable/monday").send({lesson1: "Numeracy"})

  const getResult = await request(app).get("/api/v1/timetable/monday");

  deepEqual(postResult.status, 200);
  deepEqual(getResult.body, {
    day: "monday",
    lessons: {
      lesson1: "Numeracy",
      lesson2: "Physical Education",
      lesson3: "Numeracy",
      lesson4: "Communication",
    },
  });
});

test("GET /api/v1/ratings", async () => {
  const app = createApp();

  const result = await request(app).get("/api/v1/ratings");

  deepEqual(result.status, 200);
  deepEqual(result.body, ratings);
});

test("GET /api/v1/ratings/f47ac10b-58cc-4372-a567-0e02b2c3d479", async () => {
  const app = createApp();

  const result = await request(app).get(
    "/api/v1/ratings/f47ac10b-58cc-4372-a567-0e02b2c3d479"
  );

  deepEqual(result.status, 200);
  deepEqual(result.body, ratings[0]);
});

test("POST /api/v1/ratings", async () => {
  const app = createApp();

  const postResult = await request(app)
    .post("/api/v1/ratings")
    .send({
      lesson1: {
        lesson1: 1,
        lesson2: 5,
        lesson3: 4,
        lesson4: 3,
      },
    });

  deepEqual(postResult.status, 201);
});
