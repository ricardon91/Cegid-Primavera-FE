import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerListComponent } from './components/costumer-list/costumer-list.component';
import { HomeComponent } from './components/home/home.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', component: CostumerListComponent },
  { path: 'sales', component: SalesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
