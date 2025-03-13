describe("Adoptions API", () => {
  it("Should create a new adoption", async () => {
    const res = await chai
      .request(app)
      .post("/api/adoptions")
      .send({ userId: "123", petId: "456" });
    expect(res).to.have.status(201);
    expect(res.body).to.have.property(
      "message",
      "Adoption successfully created"
    );
  });
});
