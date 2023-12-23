import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cegid-Primavera.UI';
}
