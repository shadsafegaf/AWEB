import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nSelectPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  imports: [I18nSelectPipe,TitleCasePipe,PercentPipe,DecimalPipe,DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe,SlicePipe,AsyncPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  time$ = interval(1000).pipe(map(val => new Date()));
  price = 20000;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  gender = 'male';
  genderMap = {
  male: 'He',
  female: 'She',
  other: 'They'
};
}
