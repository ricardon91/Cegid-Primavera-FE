import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sales';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private url = "Sales";

  constructor(private http: HttpClient) { }

  public getSales() : Observable<Sale[]>{
    return this.http.get<Sale[]>(`${environment.apiUrlSale}/${this.url}`)
  }
  
  addSale(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrlSale}/${this.url}`, data);
  }

  updateSale(data: any): Observable<any> {
    return this.http.put(`${environment.apiUrlSale}/${this.url}`, data);
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrlSale}/${this.url}/${id}`);
  }
}
