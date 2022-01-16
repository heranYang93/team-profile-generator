const { Intern } = require("../lib/employee");

describe("Intern object testing", () => {
  describe("Initialization", () => {
    it("This should return an INTERN object containing name, id, email and role", () => {
      const internOBJ = new Intern(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "Technology University of Delft"
      );
      const checkField =
        "name" in internOBJ &&
        "id" in internOBJ &&
        "email" in internOBJ &&
        "role" in internOBJ &&
        "school" in internOBJ;
      expect(checkField).toEqual(true);
    });
  });

  describe("check function getGH()", () => {
    it("This getGH function will return the SCHOOL NAME of the INTERN object", () => {
      const internOBJ = new Intern(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "Technology University of Delft"
      );
      expect(internOBJ.getSchool()).toEqual("Technology University of Delft");
    });
  });

  describe("check function getRole()", () => {
    it("This getID function will return the ROLE of the INTERN object", () => {
      const internOBJ = new Intern(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "Technology University of Delft"
      );
      expect(internOBJ.getRole()).toEqual("Intern");
    });
  });
});
