import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BudgerPlannerComponent } from './budger-planner/budger-planner.component';
import { LoginComponent } from './budger-planner/login/login.component';

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
    ],
  },
];


