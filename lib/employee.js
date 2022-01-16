class Employee {
  constructor(_name, _id, _email) {
    this.name = _name;
    this.id = _id;
    this.email = _email;
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
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(_name, _id, _email, _officeNumber) {
    super(_name, _id, _email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  constructor(_name, _id, _email, _github) {
    super(_name, _id, _email);
    this.github = _github;
  }
  getGH() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

class Intern extends Employee {
  constructor(_name, _id, _email, _school) {
    super(_name, _id, _email);
    this.school = _school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = { Employee, Manager, Engineer, Intern };
