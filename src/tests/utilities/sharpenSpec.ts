import supertest from "supertest";
import app from "../../index";
import fileExists from "../../utilties/fileCheck";

const request = supertest(app);

describe("Validate imaging processing middleware", () => {
  it("should return status 200 for /api/images with valid query", async () => {
    const response = await request.get(
      "/api/images?filename=manutd&width=800&height=600"
    );
    expect(response.status).toBe(200);
  });

  // need to delete image if present
  it("should save resized image to /thumb", async () => {
    await request.get("/api/images?filename=manutd&width=200&height=100");
    expect(fileExists(String("./public/assets/thumb/manutd200x100.jpeg"))).toBe(
      true
    );
  });

  describe("Test /images for error handling", () => {
    it("should handle error for invalid query string parameters", async () => {
      const response = await request.get("/api/images");
      expect(response.status).toBe(404);
    });

    it("should handle error for query file not found", async () => {
      const response = await request.get(
        "/api/images?filename=missing&width=800&height=600"
      );
      expect(response.status).toBe(404);
    });
  });
});
