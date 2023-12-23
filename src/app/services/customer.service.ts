import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = "Customer";

  constructor(private http: HttpClient) { }

  public getCustomers() : Observable<Customer[]>{
    return this.http.get<Customer[]>(`${environment.apiUrlCustomer}/${this.url}`)
  }
  
  addCustomer(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrlCustomer}/${this.url}`, data);
  }

  updateCustomer(data: any): Observable<any> {
    debugger
    return this.http.put(`${environment.apiUrlCustomer}/${this.url}`, data);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrlCustomer}/${this.url}/${id}`);
  }
}
