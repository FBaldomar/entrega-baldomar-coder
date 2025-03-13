import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

const { expect } = chai;
chai.use(chaiHttp);

describe("Users API", () => {
  it("Debe obtener todos los usuarios", async () => {
    const res = await chai.request(app).get("/api/users");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });
});
