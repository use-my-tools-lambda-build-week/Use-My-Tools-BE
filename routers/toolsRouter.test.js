const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");
const jwt = require("jsonwebtoken");
const Tools = require("../data/helpers/tools-model");
const secret = process.env.JWT_SECRET || "it's a secret secret";



function tokenMaker(user) {
    const payload = {
      subject: user.id,
      username: user.first_name
    };
    const options = {
      expiresIn: "1h"
    };
    return jwt.sign(payload, secret, options);
  }


  const tool = {
    id: 2,
    name: "test",
    price: 3,
    lender_id: 1
  };

  const user = {
    id: 2,
    first_name: "test",
    last_name: "test",
    email: "mail@mail.com",
    password: "test"
  };
  
 


  afterEach(async () => {
    await db("tools").truncate();
  });
  
  describe("server.js", () => {
    describe("get /api/tools", () => {
      it("should return 200 status", async () => {
        const token = tokenMaker(user);
        const res = await request(server)
          .get("/api/tools")
          .set("authorization", token);
        expect(res.status).toBe(200);
      });
      it("should return json", async () => {
        const response = await request(server).get("/api/tools");
        expect(response.type).toBe("application/json");
      });
      it("should return an array", async () => {
        const response = await request(server).get("/api/tools");
        expect(Array.isArray(response.body)).toBeTruthy();
      });
    });
  
    describe("get /api/tools/:id", () => {
      it("should return 200 status", async () => {
        const token = tokenMaker(user);
        Tools.add(tool);
        const res = await request(server)
          .get("/api/tools/1")
          .set("authorization", token);
        expect(res.status).toBe(200);
      });
      it("should return json", async () => {
        const response = await request(server).get("/api/tools");
        expect(response.type).toBe("application/json");
      });
      it("should return status code 404 if object doesn't exist", async () => {
        const response = await request(server).get("/api/tools/1000");
        expect(response.status).toBe(404);
      });
      
    });
  
    describe("post /api/tools", () => {
      it("should return 201", async () => {
        const token = tokenMaker(user);
        const res = await request(server)
          .post("/api/tools")
          .send(tool)
          .set("authorization", token);
        expect(res.status).toBe(201);
      });
    });
  
    
  
    describe("delete /api/tools/:id", () => {
      it("should return 200", async () => {
        await Tools.add(tool);
        const token = tokenMaker(user);
        const res = await request(server)
          .delete("/api/tools/1")
          .set("authorization", token);
  
        expect(res.status).toBe(200);
      });
    });
  });