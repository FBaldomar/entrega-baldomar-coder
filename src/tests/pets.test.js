import { describe, it } from "mocha";

describe("Pets API", () => {
  it("Debe obtener todas las mascotas", async () => {
    const res = await chai.request(app).get("/api/pets");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });
});
