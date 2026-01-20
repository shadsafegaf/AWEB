import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {

  constructor() {}

  getProducts(){
    return[
      {
        pid:101,
        productname: 'Logitech Mouse',
        description: '6 Button Mechanical Mouse',
        price: 899.00,
      },
      {
        pid:102,
        productname: 'JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: 1099.00,
      },
      {
        pid:103,
        productname: 'Mechanical Keyboard',
        description: 'Hot-swappable RGB Backlit',
        price: 2395.00,
      },
      {
        pid:104,
        productname: 'Oculus Meta',
        description: 'All-in-one Gaming',
        price: 22450.00,
      },
    ];
  }
}
