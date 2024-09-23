import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BudgerPlannerComponent } from './budger-planner/budger-planner.component';
import { LoginComponent } from './budger-planner/login/login.component';
import { SideNavComponent } from './budger-planner/side-nav/side-nav.component';
import { DashboardComponent } from './budger-planner/dashboard/dashboard.component';
import { IncomeComponent } from './budger-planner/income/income.component';
import { ExpenseComponent } from './budger-planner/expense/expense.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'budget-planner',
    component: BudgerPlannerComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'side-nav',
        component : SideNavComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'income',
        component : IncomeComponent
      },
      {
        path : 'expense',
      component : ExpenseComponent      }

    ],
  },
];


