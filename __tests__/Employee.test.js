const { Employee } = require("../lib/employee");

describe("EMPLOYEE object testing", () => {
  describe("Initialization", () => {
    it("This should return an EMPLOYEE object containing name, id, email and role", () => {
      const employeeOBJ = new Employee("John Doe", "1A1", "john.doe@gmail.com");
      const checkField =
        "name" in employeeOBJ &&
        "id" in employeeOBJ &&
        "email" in employeeOBJ &&
        "role" in employeeOBJ;
      expect(checkField).toEqual(true);
    });
  });

  describe("check function getName()", () => {
    it("This getName function will return the name of the EMPLOYEE object", () => {
      const employeeOBJ = new Employee("John Doe", "1A1", "john.doe@gmail.com");
      expect(employeeOBJ.getName()).toEqual("John Doe");
    });
  });

  describe("check function getID()", () => {
    it("This getID function will return the ID of the EMPLOYEE object", () => {
      const employeeOBJ = new Employee("John Doe", "1A1", "john.doe@gmail.com");
      expect(employeeOBJ.getId()).toEqual("1A1");
    });
  });

  describe("check function getEmail()", () => {
    it("This getEmail function will return the email of the EMPLOYEE object", () => {
      const employeeOBJ = new Employee("John Doe", "1A1", "john.doe@gmail.com");
      expect(employeeOBJ.getEmail()).toEqual("john.doe@gmail.com");
    });
  });
});
