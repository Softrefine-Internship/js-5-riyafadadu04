// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(name, branches = []) {
    this.name = name;
    this.branches = branches;
  }

  displayBranches() {
    if (this.branches.length === 0) {
      console.log(`No branches available in ${this.name}.`);
    } else {
      console.log(`Branches of ${this.name}: ${this.branches}`);
    }
  }

  addBranch(branchName) {
    if (this.branches.includes(branchName)) {
      console.log(`Branch ${branchName} already exists in ${this.name}.`);
    } else {
      this.branches.push(branchName);
      console.log(`Added branch ${branchName} to ${this.name}.`);
    }
  }

  removeBranch(branchName) {
    const index = this.branches.indexOf(branchName);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Removed branch ${branchName} from ${this.name}.`);
    } else {
      console.log(`Branch ${branchName} not found in ${this.name}.`);
    }
  }
}

let bank = new Bank("BOB", ["Branch-1", "Branch-2", "Branch-3"]);

bank.addBranch("Branch-4");
bank.removeBranch("Branch-2");
bank.displayBranches();
