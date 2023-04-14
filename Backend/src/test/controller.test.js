const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");

require("dotenv").config();
/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URL);
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });
  describe("GET /Books", () => {
    it("should return all books", async () => {
      const res = await request(app).get("/Books");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });
  describe("POST /Books", () => {
    it("should create a Book", async () => {
      const res = await request(app).post("/Books").send({
        title: "Atomic Habits",
        author: "James Clear",
        no_of_pages: 12,
        published_at: "2023-04-14T12:00:00Z"
      });
      expect(res.statusCode).toBe(200);
    });
  })
  describe("PUT /Books/:id", () => {
    it("should update a product", async () => {
      const res = await request(app)
        .put("/Books/64399a49f37d684b859fd429")
        .send({
            title: "Atomic Habits1",
            author: "James Clear",
            no_of_pages: 122,
            published_at: "2023-04-14T12:00:00Z"
        });
      expect(res.statusCode).toBe(200);
    });
  });
  describe("DELETE /Books/:id", () => {
    it("should delete a product", async () => {
      const res = await request(app).delete(
        "/Books/64399a49f37d684b859fd429"
      );
      expect(res.statusCode).toBe(200);
    });
  });