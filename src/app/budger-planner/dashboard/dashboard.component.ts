import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // income
  lastMonthsIncome = ['january : $1000', 'february : $1500', 'march : $1200'];
  curruntMontIncome = "$2000";


  // expense
  lastMonthsExpense = ['january : $800', 'february : $100', 'march : $1200'];
  curruntMontExpense = "$1000";

  // to do transaction

  todoTransaction = [
     { description : 'pay electricity bill'},
     { description : 'Submit monthly report'},
     { description : 'buy procerie'},
     { description : 'call insurance company'}

];

totalCuruntMonthIncome = 2000 ;
totalCuruntMonthExpence = 1500;

  constructor(public router: Router) { }
  onIncome(): void {
    this.router.navigate(['budget-planner/income']);
  }

  onExpense(): void {
    this.router.navigate(['budget-planner/expense']);
  }

  get currentMonthMovings() :number {
   return this.totalCuruntMonthIncome - this.totalCuruntMonthExpence ;
  }
}
