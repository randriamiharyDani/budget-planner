import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-budger-planner',
  standalone: true,
  imports: [
   RouterOutlet
  ],
  templateUrl: './budger-planner.component.html',
  styleUrl: './budger-planner.component.scss'
})
export class BudgerPlannerComponent {

}
