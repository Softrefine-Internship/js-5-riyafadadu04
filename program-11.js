// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
  constructor(accountNumber, accountHolderName, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `Deposit of ${amount} successfull in ${this.accountHolderName}. New balance: ${this.balance}`
      );
    } else {
      console.log("Invalid deposit amount. Please enter a positive value.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `Withdrawal of ${amount} successfull in ${this.accountHolderName}. New balance: ${this.balance}`
      );
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  transfer(amount, targetAccount) {
    if (!targetAccount) {
      console.log("Target account is not exist.");
      return;
    }
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      // targetAccount.deposit(amount);
      console.log(
        `Transfer of ${amount} successfull to ${targetAccount.accountHolderName}. New balance for ${this.accountHolderName}: ${this.balance}, New balance for ${targetAccount.accountHolderName}: ${targetAccount.balance}`
      );
    } else {
      console.log("Invalid transfer amount.");
    }
  }
}

const account1 = new BankAccount("123456789", "account-1", 50000);
const account2 = new BankAccount("987654321", "account-2", 20000);

account1.deposit(1000);
account2.withdraw(5000);
account1.transfer(2000, account2);
