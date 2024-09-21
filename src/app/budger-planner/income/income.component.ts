import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent implements OnInit{

  incomeForm: any;
  selectedMonth: any;

  januaryIncome: any[] = [
    { source: 'Salary', amount: '5000', investment: '401(K)' },
    { source: 'Freenlincing', amount: '1000', investment: 'stocks' }
  ];

  febroaryIncome: any[] = [
    { source: 'Salary', amount: '5500', investment: '401(K)' },
    { source: 'rental_income', amount: '700', investment: 'real_estate' }
  ];

  marchIncome: any[] = [
    { source: 'salary', amount: '500', investment: '401(K)' },
    { source: 'freenlincing', amount: '1200', investment: 'stocks' },
    { source: 'rental_income', amount: '600', investment: 'real_estate' }
  ];


  monthSelected:boolean = false ;

  constructor(public fb: FormBuilder ,  public router : Router) {
      const currentDate = new Date() ;
      this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }
ngOnInit(): void {
  this.incomeForm = this.fb.group({
    month: ['', Validators.required],  // Champ requis
    source: ['', Validators.required],  // Champ requis
    amount: ['', [Validators.required, Validators.min(1)]],  // Champ requis et doit être > 0
    investment: ['', Validators.required]  // Champ requis
  });
}




  onChange(event: any): void {
    this.selectedMonth = event.target.value;
    this.monthSelected =true ;
    this.getFilteredIncome();
  }

        // get income month
    getIncomeForMonth(month: string) :any[] {
      switch(month) {
        case 'january' :
        return this.januaryIncome ;
        case 'february' :
          return this.febroaryIncome;
        case 'march' :
          return this.marchIncome;
        default :
        return []
      }
  }

  // cl=alculer total income
  calculateTotalIncome(month: string): number {
    // initilize 0 le total
    let totalIncome = 0;
    for(const income of this.getIncomeForMonth(month)) {
      totalIncome += Number(income.amount);
    }
    return totalIncome;
  }

// filtred income

  getFilteredIncome() {
    let filteredIncome: any[] = [];
    switch (this.selectedMonth) {
      case 'january':
        filteredIncome = [...this.januaryIncome];
        break;
      case 'february':
        filteredIncome = [...this.febroaryIncome];
        break;
      case 'march':
        filteredIncome = [...this.marchIncome];
        break;
        default :
        break
    }
    return filteredIncome;
  }

  // push data

  onSubmit() {
    if(this.incomeForm.valid){
      // add new income to the selected month income list
      const dataForm = this.incomeForm.value ;

      console.log(dataForm);

      switch(this.selectedMonth) {
        case 'january':
          this.januaryIncome.push(dataForm);
          break;
        case 'february':
          this.febroaryIncome.push(dataForm);
          break;
        case 'march':
          this.marchIncome.push(dataForm);
          break;
          default :
          break ;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({month: '' , source: '', amount: '' , investment:'' })
    }else {
    console.error('Le formulaire est invalide');
  }
  }

  onReset(){
    console.log("form saved")
  }

  onExport(){
    console.log("generate expert report");
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
