let Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, Id, email, schoolName) {
    super(name, Id, email);
    this.schoolName = schoolName;
  }
  getRole() {
    return "Intern";
  }
  getschoolName() {
    return this.schoolName;
  }
}

module.exports = Intern;
