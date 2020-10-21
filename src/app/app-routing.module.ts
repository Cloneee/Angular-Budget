import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { ConvertComponent } from './convert/convert.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'budget', component: BudgetComponent },
  { path: 'convert', component: ConvertComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
