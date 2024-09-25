import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ReactiveFormsModule ,MatCommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
 todoForm:any ;
  selectedMonth: string;


  expenses : {month : string ,expenseAmount : number }[] =[
    {month : 'january' ,expenseAmount: 1500 },
    {month : 'february' ,expenseAmount: 2000 },
    {month : 'march' ,expenseAmount: 1800 },

  ];

  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: '1000' },
    { expenseType: 'Light bills', expenseAmount: '500' }
  ];

  febroaryExpense: any[] = [
    { expenseType: 'Essentialy', expenseAmount: '200' },
    { expenseType: 'Light bills', expenseAmount: '400' }
  ];

  marchExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: '1100' },
    { expenseType: 'Essentialy', expenseAmount: '250'},

  ];

  monthSelected:boolean =false;

  constructor(public fb:FormBuilder , public router:Router){
    const currentDate = new Date ;
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }



  ngOnInit(): void {

    this.todoForm = this.fb.group({
      month : ['',Validators.required],
      expenseAmount : ['', Validators.required] ,
      expenseType : ['', Validators.required],// champ requis
    })
  }

  onSubmitExpense() : void{
    const dataForm = this.todoForm.value ;

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
      this.todoForm.reset();
      // this.expenseForm.patchValue({expenseType: '' , expenseAmount:'' })
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

    calculateTotalExpense(month: string): number {
    // initilize 0 le total
      let totalExpense = 0;
    for(const expense of this.getIncomeForMonth(month)) {
      totalExpense += Number(expense.expenseAmount);
    }
    return totalExpense;
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
    console.log('save expense form');
  }
  onExport() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  toggleSelection() {
    console.log('goooo')
  }

}
