import { Component } from '@angular/core';
import { iCarModel } from '../../interface/i-car-model';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  carModels!: iCarModel;
  audiCarArr:iCarModel[] = [];

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

          const audiCars= res.filter((car: { brand: string; })=>car.brand === 'Audi')
          audiCars.forEach((car: iCarModel) => {
            this.audiCarArr.push(car)
          })
      })
      .catch ((err) =>  {
        console.log(err)
      })
      console.log(this.audiCarArr);
    }
}
