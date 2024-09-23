import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

  expenseForm:any ;
  selectedMonth: any;

  januaryExpense: any[] = [
    { source: 'Salary', amount: '5000', investment: '401(K)' },
    { source: 'Freenlincing', amount: '1000', investment: 'stocks' }
  ];

  febroaryExpense: any[] = [
    { source: 'Salary', amount: '5500', investment: '401(K)' },
    { source: 'rental_income', amount: '700', investment: 'real_estate' }
  ];

  marchExpense: any[] = [
    { source: 'salary', amount: '500', investment: '401(K)' },
    { source: 'freenlincing', amount: '1200', investment: 'stocks' },
    { source: 'rental_income', amount: '600', investment: 'real_estate' }
  ];

  monthSelected:boolean =false;
  constructor(public fb:FormBuilder ){
    const currentDate = new Date ;
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }



  ngOnInit(): void {

    this.expenseForm = this.fb.group({
      month : ['',Validators.required],
      amount : ['', Validators.required] ,
      source : ['', Validators.required],
      investment : ['', Validators.required]  // champ requis
    })
  }

  onSubmit() : void{
      if(this.expenseForm.valid){
      // add new income to the selected month income list
      const dataForm = this.expenseForm.value ;

      console.log(dataForm);

      switch(this.selectedMonth) {
        case 'january':
          this.januaryExpense.push(dataForm);
          break;
        case 'february':
          this.febroaryExpense.push(dataForm);
          break;
        case 'march':
          this.marchExpense.push(dataForm);
          break;
          default :
          break ;
      }
      this.expenseForm.reset();
      this.expenseForm.patchValue({month: '' , source: '', amount: '' , investment:'' })
    }else {
    console.error('Le formulaire est invalide');
  }
  }

  onChange(event:any) : void{
    this.selectedMonth = event.target.value ;
    this.monthSelected = true ;
    this.getFilteredExpense();
  }

      getIncomeForMonth(month: string) :any[] {
      switch(month) {
        case 'january' :
        return this.januaryExpense ;
        case 'february' :
          return this.febroaryExpense;
        case 'march' :
          return this.marchExpense;
        default :
        return []
      }
  }

    calculateTotalIncome(month: string): number {
    // initilize 0 le total
    let totalIncome = 0;
    for(const income of this.getIncomeForMonth(month)) {
      totalIncome += Number(income.amount);
    }
    return totalIncome;
  }


    getFilteredExpense() {
    let filteredIncome: any[] = [];
    switch (this.selectedMonth) {
      case 'january':
        filteredIncome = [...this.januaryExpense];
        break;
      case 'february':
        filteredIncome = [...this.febroaryExpense];
        break;
      case 'march':
        filteredIncome = [...this.marchExpense];
        break;
        default :
        break
    }
    return filteredIncome;
  }

  onReset(){

  }
  onExport() {

  }

}
