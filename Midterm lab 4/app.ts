import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('angular-share-data');
  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  public products: {
    pid: number,
    productname: string,
    description: string,
    price: number,
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productService: Products
  ) {}

  ngOnInit(){
    this.employees = this._employeeService.getEmployee();
    this.products = this._productService.getProducts();
  }
}
