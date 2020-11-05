import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { BudgetItem } from '../shared/models/budget-items.models';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.totalBudget = 0;
    if (this.budgetItems.length == 0){
      this.budgetItems = JSON.parse(localStorage.getItem("savedData"));
    }
    for (let i=0; i<this.budgetItems.length; i++){
      this.totalBudget += this.budgetItems[i].amount;
    }
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
    localStorage.setItem("savedData", JSON.stringify(this.budgetItems));
  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
    localStorage.setItem("savedData", JSON.stringify(this.budgetItems));
  }

  updateItem(updateEvent: UpdateEvent){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
    localStorage.setItem("savedData", JSON.stringify(this.budgetItems));
  }
}
