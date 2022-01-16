const { Manager } = require("../lib/employee");

describe("MANAGER object testing", () => {
  describe("Initialization", () => {
    it("This should return an MANAGER object containing name, id, email and role", () => {
      const managerOBJ = new Manager(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "East 301"
      );
      const checkField =
        "name" in managerOBJ &&
        "id" in managerOBJ &&
        "email" in managerOBJ &&
        "role" in managerOBJ &&
        "officeNumber" in managerOBJ;
      expect(checkField).toEqual(true);
    });
  });

  describe("check function getOffice()", () => {
    it("This getOffice function will return the OFFICE NUMBER of a MANAGER object", () => {
      const managerOBJ = new Manager(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "East 301"
      );
      expect(managerOBJ.getOffice()).toEqual("East 301");
    });
  });

  describe("check function getRole()", () => {
    it("This getID function will return the ROLE of the MANAGER object", () => {
      const managerOBJ = new Manager(
        "John Doe",
        "1A1",
        "john.doe@gmail.com",
        "East 301"
      );
      expect(managerOBJ.getRole()).toEqual("Manager");
    });
  });
});
