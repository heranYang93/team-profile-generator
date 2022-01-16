class Employee {
  constructor(_name, _id, _email) {
    this.name = _name;
    this.id = _id;
    this.email = _email;
    this.role = "Employee";
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

class Manager extends Employee {
  constructor(_name, _id, _email, _officeNumber) {
    super(_name, _id, _email);
    this.officeNumber = _officeNumber;
    this.role = "Manager";
  }
  getOffice() {
    return this.officeNumber;
  }
  getRole() {
    return this.role;
  }
}

class Engineer extends Employee {
  constructor(_name, _id, _email, _github) {
    super(_name, _id, _email);
    this.github = _github;
    this.role = "Engineer";
  }
  getGH() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

class Intern extends Employee {
  constructor(_name, _id, _email, _school) {
    super(_name, _id, _email);
    this.school = _school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
}

module.exports = { Employee, Manager, Engineer, Intern };
