import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

isSlideOut= true;
router = inject(Router)


  toggleSlideOut(): void{
    this.isSlideOut = !this.isSlideOut
  }

  OnDash(): void{

  }
  OnProfil(): void{
      this.router.navigate(["/budget-planner/profile"]);
  }

OnHistory() :void {
      this.router.navigate(["/budget-planner/history"]);
}

OnLogOut() :void{

}
}
