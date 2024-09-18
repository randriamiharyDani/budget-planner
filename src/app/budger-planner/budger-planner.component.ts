import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-budger-planner',
  standalone: true,
  imports: [
   RouterOutlet,
   CommonModule,
   MatIconModule
  ],
  templateUrl: './budger-planner.component.html',
  styleUrl: './budger-planner.component.scss'
})
export class BudgerPlannerComponent {

}
