import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Test base url route", () => {
  it("should return status 200 for /api", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
