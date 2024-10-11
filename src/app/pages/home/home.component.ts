import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iCarModel } from '../../interface/i-car-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carModels!: iCarModel;
  carArr: iCarModel[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('errore nella fetch');
        }
      })
      .then((res) => {
        res.forEach((car: iCarModel) => {
          function shuffle(array: iCarModel[]) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
          }
          this.carArr.push(car);
          this.carArr = shuffle(this.carArr);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
