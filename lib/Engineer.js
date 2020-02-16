let Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, Id, emial, gitHub) {
    super(name, Id, email);
    this.gitHub = gitHub;
  }
  getRole() {
    return "Engineer";
  }
  getgitHub() {
    return this.gitHub;
  }
}

module.exports = Engineer;
