const { Manager } = require("../lib/employee");

describe("MANAGER object testing", () => {
  describe("Initialization", () => {
    it("This should return an MANAGER object containing name, id, email and role", () => {
      const internOBJ = new Manager(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "East 301"
      );
      const checkField =
        "name" in internOBJ &&
        "id" in internOBJ &&
        "email" in internOBJ &&
        "role" in internOBJ &&
        "officeNumber" in internOBJ;
      expect(checkField).toEqual(true);
    });
  });

  describe("check function getOffice()", () => {
    it("This getOffice function will return the OFFICE NUMBER of a MANAGER object", () => {
      const internOBJ = new Manager(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "East 301"
      );
      expect(internOBJ.getOffice()).toEqual("East 301");
    });
  });

  describe("check function getRole()", () => {
    it("This getID function will return the ROLE of the MANAGER object", () => {
      const internOBJ = new Manager(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "East 301"
      );
      expect(internOBJ.getRole()).toEqual("Manager");
    });
  });
});
