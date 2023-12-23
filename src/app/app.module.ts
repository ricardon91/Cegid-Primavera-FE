import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerListComponent } from './components/costumer-list/costumer-list.component';
import { CostumerAddEditComponent } from './components/costumer-add-edit/costumer-add-edit.component';
import { CustomerService } from './services/customer.service';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { CoreService } from './services/core.service';
import { HomeComponent } from './components/home/home.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SalesAddEditComponent } from './components/sales-add-edit/sales-add-edit.component';
import { SaleService } from './services/sale.service';

@NgModule({
  declarations: [
    AppComponent,
    CostumerListComponent,
    CostumerAddEditComponent,
    HomeComponent,
    SalesListComponent,
    SalesAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,    
    MatProgressSpinnerModule
  ],
  providers: [CustomerService, CoreService, SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
