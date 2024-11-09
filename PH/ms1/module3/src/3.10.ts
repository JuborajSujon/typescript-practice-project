class BankAccount{
   public readonly id: number;
   protected name: string;
   private _balance: number;


    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // public getBalance() {
    //   return this._balance;
    // }


    // use getter 
    get balance() {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

  }

  class StudentAccount extends BankAccount{
    test() {
      this.name;
    }
  }

  const poorAccout = new BankAccount(111, "Mr. Poor", 20);

  // poorAccout.addDeposit(300);
  // const myBalance = poorAccout.getBalance();

  poorAccout.deposit = 300;
  const myBalance = poorAccout.balance;
  console.log(myBalance);