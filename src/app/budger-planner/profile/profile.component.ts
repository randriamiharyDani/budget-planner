import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../side-nav/side-nav.component';

  // ...

  @Component({
    selector: 'app-profile',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule ,SideNavComponent],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
  })

export class ProfileComponent {


  profileForm:any;
  _router = inject(Router);
  _matSnackBar = inject(MatSnackBar);
  _FormBulder = inject(FormBuilder);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.profileForm = this._FormBulder.group({
      name : ["", Validators.required],
      age : ["",[ Validators.required , Validators.min(18)] ],
      dob : ["",Validators.required],
      email : ["", [Validators.required , Validators.email]],

      gender : ["", Validators.required],
      occupation :["" ,Validators.required],
      address :["" ,Validators.required],
      contact :["", Validators.required]
    })
  }

  onSubmit(): void {
    if(this.profileForm.valid){
      // this._router.navigate(['dashboard']);
      console.log("profil save :" ,this.profileForm.value )
    }else{
      this._matSnackBar.open("Please fill in all fields correctly", "Close", { duration: 2000 });
    }
  }


}
