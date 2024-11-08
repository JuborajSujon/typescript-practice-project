{
  // Getter and setter 
  class BankAccount{
   public readonly id: number;
   protected name: string;
   private _balance: number;


    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount{
    test() {
      this.name;
    }
  }

  const poorAccout = new BankAccount(111, "Mr. Poor", 20);

  poorAccout.addDeposit(300);
  const myBalance = poorAccout.getBalance();
  console.log(myBalance);

  


  // 
}