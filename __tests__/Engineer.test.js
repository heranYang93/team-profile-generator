const { Engineer } = require("../lib/employee");

describe("Engineer object testing", () => {
  describe("Initialization", () => {
    it("This should return an ENGINEER object containing name, id, email and role", () => {
      const engineerOBJ = new Engineer(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "johnDoe1995"
      );
      const checkField =
        "name" in engineerOBJ &&
        "id" in engineerOBJ &&
        "email" in engineerOBJ &&
        "role" in engineerOBJ &&
        "github" in engineerOBJ;
      expect(checkField).toEqual(true);
    });
  });

  describe("check function getGH()", () => {
    it("This getGH function will return the GITHUB USERNAME of the ENGINEER object", () => {
      const engineerOBJ = new Engineer(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "johnDoe1995"
      );
      expect(engineerOBJ.getGH()).toEqual("johnDoe1995");
    });
  });

  describe("check function getRole()", () => {
    it("This getID function will return the ROLE of the ENGINEER object", () => {
      const engineerOBJ = new Engineer(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "johnDoe1995"
      );
      expect(engineerOBJ.getRole()).toEqual("Engineer");
    });
  });
});
