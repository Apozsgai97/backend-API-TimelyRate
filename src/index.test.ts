import test from "node:test";
import { createApp } from "./app";
import request from "supertest";
import { deepEqual } from "node:assert";
import timetables from "./features/timetable/timetables.json";


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
