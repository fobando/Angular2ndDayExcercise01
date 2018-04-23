import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  getBalance: number;
  deposit: number;
  withDraw: number;
  lastTransaction: Array<number>;

  constructor ( public atmService: AtmServiceService) {
    this.getBalance = atmService.getAccountBalance('123');
    this.deposit = atmService.depositMoney('123', 100);
    this.withDraw = atmService.withDrawMoney ('123', 200);
    this.lastTransaction = atmService.getLastTransactionAmount('123');
  }

}
