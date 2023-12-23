import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerListComponent } from './components/costumer-list/costumer-list.component';

const routes: Routes = [
  {path: 'customer', component: CostumerListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
