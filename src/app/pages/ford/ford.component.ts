import { Component } from '@angular/core';
import { iCarModel } from '../../interface/i-car-model';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  carModels!: iCarModel;
  fordCarArr:iCarModel[] = [];

    ngOnInit(){
      fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('errore nella fetch')
        }
      })
      .then ((res) => {

          const fordCars= res.filter((car: { brand: string; })=>car.brand === 'Ford')
          fordCars.forEach((car: iCarModel) => {
            this.fordCarArr.push(car)
          })
      })
      .catch ((err) =>  {
        console.log(err)
      })
      console.log(this.fordCarArr);
    }
}
