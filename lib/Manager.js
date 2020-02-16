let Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, Id, emial, officeNumber) {
    super(name, Id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getofficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
