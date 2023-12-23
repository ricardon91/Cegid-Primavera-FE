import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sale } from 'src/app/models/sales';
import { CoreService } from 'src/app/services/core.service';
import { SaleService } from 'src/app/services/sale.service';
import { SalesAddEditComponent } from '../sales-add-edit/sales-add-edit.component';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  sales: Sale[] = [];
  saleToEdit?: Sale;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id','description', 'unit', 'price', 'totalPrice', 'action']    

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private salesService: SaleService, private coreService: CoreService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.grid();
  }

  grid() {    
    this.salesService
    .getSales()
    .subscribe((result: Sale[]) => {
      this.sales = result;
      this.dataSource = new MatTableDataSource<any>(this.sales);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }  

  openAddEditSalesForm() {
    const dialogRef = this.dialog.open(SalesAddEditComponent);
    dialogRef.afterClosed().subscribe({      
      next: (val) => {
        if (val) {
          this.grid();
        }
      },
    });
  }

  deleteSale(id: number) {
    this.salesService.deleteSale(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('Sale deleted!', 'done');
        this.grid();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(SalesAddEditComponent, {
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
