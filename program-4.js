// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into your account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw ${amount} from your account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }
}

const account = new Account("123456789", 1000);
account.deposit(500);
account.withdraw(200);
