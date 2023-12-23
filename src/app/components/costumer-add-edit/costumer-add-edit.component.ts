import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/services/core.service';
import { CustomerService } from 'src/app/services/customer.service';
import { countries } from 'src/app/shared/store/country-data-store';

@Component({
  selector: 'app-costumer-add-edit',
  templateUrl: './costumer-add-edit.component.html',
  styleUrls: ['./costumer-add-edit.component.css']
})
export class CostumerAddEditComponent implements OnInit {
  customerForm: FormGroup;
  
  // country: string[] = [
  //   'Brazil',
  //   'France',
  //   'Portugal',
  //   'United Kingdom'
  // ]

  countries: any = countries;

  constructor(private fb: FormBuilder, 
    private customerService: CustomerService,
    private coreService: CoreService, 
    private dialogRef: MatDialogRef<CostumerAddEditComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { 
      this.customerForm = this.fb.group({
        name: '',
        country: '',
        taxId: ''
      });
    }

  ngOnInit(): void {
    this.customerForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.customerForm.valid) {
      if (this.data) {
        debugger
        this.customerForm.value.id = this.data.id;        
        this.customerService
          .updateCustomer(this.customerForm.value)
          .subscribe({
            next: (val: any) => {
              this.coreService.openSnackBar('Customer updated!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        debugger
        this.customerService.addCustomer(this.customerForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Customer added successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}
