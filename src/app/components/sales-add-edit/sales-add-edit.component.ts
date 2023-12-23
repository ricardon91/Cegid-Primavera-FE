import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/services/core.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sales-add-edit',
  templateUrl: './sales-add-edit.component.html',
  styleUrls: ['./sales-add-edit.component.css']
})
export class SalesAddEditComponent implements OnInit {
  salesForm: FormGroup; 

  constructor(private fb: FormBuilder, 
    private salesService: SaleService,
    private coreService: CoreService, 
    private dialogRef: MatDialogRef<SalesAddEditComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { 
      this.salesForm = this.fb.group({
        description: '',
        unit: '',
        price: ''
      });
    }

  ngOnInit(): void {
    this.salesForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.salesForm.valid) {
      if (this.data) {
        this.salesForm.value.id = this.data.id;        
        this.salesService
          .updateSale(this.salesForm.value)
          .subscribe({
            next: (val: any) => {
              this.coreService.openSnackBar('Sale updated!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              debugger
              if(err.error.includes("Price should be greater than zero")){
                this.coreService.openSnackBar("Price should be greater than zero.");
              }              
              console.error(err);
            },
          });
      } else {
        this.salesService.addSale(this.salesForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Sale added successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            debugger
            if(err.error.includes("Price should be greater than zero")){
              this.coreService.openSnackBar("Price should be greater than zero.");
            }   
            console.error(err);
          },
        });
      }
    }
  }

}
