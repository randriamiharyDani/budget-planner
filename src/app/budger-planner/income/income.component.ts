import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {

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


  monthSelcted:boolean = false ;

  constructor(public fb: FormBuilder ,  public router : Router) {
      const currentDate = new Date() ;
      this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],  // champ requis
      investment: ['', Validators.required]
    })
  }



  onChange(event: any): void {
    this.selectedMonth = event.target.value;
    this.monthSelcted =true ;
    this.getFilteredIncome();
  }

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

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for(const income of this.getIncomeForMonth(month)) {
      totalIncome += Number(income.amount);
    }
    return totalIncome;

  }


  getFilteredIncome() {
    let filteredIncome: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredIncome = [...this.januaryIncome];
        break;
      case 'February':
        filteredIncome = [...this.febroaryIncome];
        break;
      case 'March':
        filteredIncome = [...this.marchIncome];
        break;

        default :
        break
    }
    return filteredIncome;
  }

  onSubmit(): void {
    if(this.incomeForm.valid){
      const newIncome = this.incomeForm.value ;
      // add new income to the selected month income list
      switch(this.selectedMonth) {
        case 'january':
          this.januaryIncome.push(newIncome);
          break;
        case 'February':
          this.febroaryIncome.push(newIncome);
          break;
        case 'March':
          this.marchIncome.push(newIncome);
          break;
          default :
          break
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '' , source: '', amount: '' , investment:'' })

    }
  }

  onReset() :void {
    console.log("form saved")
  }

  onExport(): void{
    console.log("generate expert report");
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
