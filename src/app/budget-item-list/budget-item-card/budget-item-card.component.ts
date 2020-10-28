import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() isIncome: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClickMe() {
    alert('Edit file');
  }

  
}