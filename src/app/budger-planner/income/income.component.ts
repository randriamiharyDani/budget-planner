import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {

  incomeForm: any;
  constructor( public fb : FormBuilder) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.incomeForm = this.fb.group({
      month : ['', Validators.required] ,
      source : ['' , Validators.required],
      amount : ['', Validators.required],  // champ requis
      investment : ['' ,Validators.required]
    })
  }

  onSubmit() : void {

  }

  onChange() : void {
    
  }
}
