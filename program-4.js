// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return this.balance;
        } else {
            return "Invalid deposit amount.";
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            return "Invalid withdrawal amount or insufficient balance.";
        }
    }
}

const account = new BankAccount("123456789", 1000);

console.log("Initial balance:", account.balance);
console.log("Deposited 500, new balance:", account.deposit(500));
console.log("Withdrew 200, new balance:", account.withdraw(200));
