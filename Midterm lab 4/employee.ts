import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  constructor() {}

  getEmployee() {
    return[
      {
        id:101,
        firstname: 'Joseph',
        lastname: 'Dizon',
        email: 'jdizon@hau.edu.ph'
      },
      {
        id:102,
        firstname: 'James',
        lastname: 'Atienza',
        email: 'jatienza@hau.edu.ph'
      },
      {
        id:103,
        firstname: 'Jonh',
        lastname: 'Cena',
        email: 'jcena@hau.edu.ph'
      },
      {
        id:104,
        firstname: 'Robert',
        lastname: 'Quintana',
        email: 'rquinta@hau.edu.ph'
      },
      {
        id:105,
        firstname: 'Adrian',
        lastname: 'Tagle',
        email: 'aftagle2@hau.edu.ph'
      },
    ];
  }
}
