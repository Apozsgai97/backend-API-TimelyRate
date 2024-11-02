import test from "node:test";
import { createApp } from "./app";
import  request from "supertest";
import { deepEqual } from "node:assert";

test("GET /", async () => {
 const app = createApp();

 const result = await request(app).get("/");

 deepEqual(result.status, 200);
 deepEqual(result.body, {status: "ready"});
})