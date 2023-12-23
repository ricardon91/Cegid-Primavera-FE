import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CostumerAddEditComponent } from '../costumer-add-edit/costumer-add-edit.component';
import { CoreService } from 'src/app/services/core.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.css']
})
export class CostumerListComponent implements OnInit {
  customers: Customer[] = [];
  customerToEdit?: Customer;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id','name', 'country', 'taxId', 'action']    

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService, private coreService: CoreService, private dialog: MatDialog) { }

  ngOnInit(): void {    
    this.grid();
  }

  grid() {    
    this.customerService
    .getCustomers()
    .subscribe((result: Customer[]) => {
      this.customers = result;
      this.dataSource = new MatTableDataSource<any>(this.customers);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }  

  openAddEditCustomerForm() {
    const dialogRef = this.dialog.open(CostumerAddEditComponent);
    dialogRef.afterClosed().subscribe({      
      next: (val) => {
        if (val) {
          this.grid();
        }
      },
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('Customer deleted!', 'done');
        this.grid();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(CostumerAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.grid();
        }
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
