import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
    { source: 'Salary', amount: '5000', investment: '401k' },
    { source: 'Freenlincing', amount: '1000', investment: 'stock' }
  ];

  febroaryIncome: any[] = [
    { source: 'Salary', amount: '5500', investment: '401k' },
    { source: 'rental income', amount: '700', investment: 'real estate' }
  ];

  marchIncome: any[] = [
    { source: 'Salary', amount: '500', investment: '401k' },
    { source: 'Freenlincing', amount: '1200', investment: 'stock' },
    { source: 'rental income', amount: '600', investment: 'real estate' }
  ];

  constructor(public fb: FormBuilder) {
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

  onSubmit(): void {

  }

  onChange(event: any): void {
    this.selectedMonth = event.target.value;
    this.getFilteredIncome();
  }

    getIncomeForMonth(month: string) :any[] {
      switch(month) {
        case 'january' :
        return this.januaryIncome ;
        case 'February' :
          return this.febroaryIncome;
        case 'March' :
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
}
