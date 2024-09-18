import { Component } from '@angular/core';

// import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Importation du module pour les formulaires réactifs
import { CommonModule } from '@angular/common';

import { FormBuilder , Validators} from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    //  BrowserModule,
    ReactiveFormsModule,  // Ajout de ReactiveFormsModule ici
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm:any;
registerForm:any;

activeForm:'login'| 'register' = 'login' ;

constructor(private fb :FormBuilder,
            private route :Router,
            private snackbar : MatSnackBar
  ){}

 // Initialisation dans ngOnInit
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[ Validators.required ,Validators.email]],  // champ requis
      password: ['', Validators.required],  // champ requis
    });

      this.registerForm = this.fb.group({
        username: ['', Validators.required],  // champ requis
        email: ['', [Validators.required ,Validators.email]],  // champ requis
        password: ['', Validators.required],  // champ requis
    });
  }


// toggleForm(): void {
//   this.activeForm = this.activeForm === 'login' ? 'register' : 'login';
// }
toggleForm(form : 'login'| 'register'){
  this.activeForm = form;
}

  login(): void {
    if (this.loginForm.valid) {
      console.log("login--->" , this.loginForm.value);
      this.route.navigate(["budget-planner/dashbord"])
    }
    else{
      this.snackbar.open("invalid email or password" ,'close' , {duration : 3000})
    }
  }
   register(): void {
    if (this.registerForm.valid) {

      console.log('Register data:', this.registerForm.value);
       this.route.navigate(["budget-planner/dashbord"]);
       setTimeout(()=>{
        window.location.reload();
       },2000)
    }
     else{
      this.snackbar.open("invalid email or password" ,'close' , {duration : 3000})
    }
  }


}
