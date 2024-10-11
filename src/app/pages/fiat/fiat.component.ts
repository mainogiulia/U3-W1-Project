import { Component } from '@angular/core';
import { iCarModel } from '../../interface/i-car-model';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  carModels!: iCarModel;
fiatCarArr:iCarModel[] = [];

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

        const fiatCars= res.filter((car: { brand: string; })=>car.brand === 'Fiat')
        fiatCars.forEach((car: iCarModel) => {
          this.fiatCarArr.push(car)
        })
    })
    .catch ((err) =>  {
      console.log(err)
    })
    console.log(this.fiatCarArr);
  }
}
