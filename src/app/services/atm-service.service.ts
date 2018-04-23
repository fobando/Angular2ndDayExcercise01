import { Injectable } from '@angular/core';
// const transactions = [{txntype: 'Deposit', amt: 100}, {txntype: 'Withdraw', amt: 400}];

const transactions = [ 100, 400];

@Injectable()
export class AtmServiceService {

  constructor() {  }

  getAccountBalance(acctNumber: string): number {
    return 200;
  }

  depositMoney(acctNumber: string, amount: number): number {
    return 100;
  }

  withDrawMoney(acctNumber: string, amount: number): number {
    return 400;
  }

  getLastTransactionAmount(acctNumber: string): Array<number> {
    return transactions;
  }

}
