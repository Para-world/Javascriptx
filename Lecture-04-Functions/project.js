let balance = 1000;

function deposit(amount) {
  balance += amount;
  console.log(`Deposited ₹${amount}. New balance: ₹${balance}`);
}

function withdraw(amount) {
  if (amount > balance) {
    console.log("Insufficient balance!");
  } else {
    balance -= amount;
    console.log(`Withdrew ₹${amount}. New balance: ₹${balance}`);
  }
}

function checkBalance() {
  console.log(`Current balance: ₹${balance}`);
}

// Try running:
deposit(500);
withdraw(200);
checkBalance();
