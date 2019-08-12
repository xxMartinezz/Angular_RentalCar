import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[];

  constructor(private messageService: MessageService) 
  {
    this.cars = 
    [
      {id: 1, carName: 'Fiat', carPrice: 200, available: true, carImage: '../assets/car-2.png'},
      {id: 2, carName: 'BMW', carPrice: 200, available: false, carImage: '../assets/car-3.png'},
      {id: 3, carName: 'Subaru', carPrice: 200, available: true, carImage: '../assets/car-1.png'}
    ];
  }

  getCarList(): Observable<Car[]>
  {
    /*if(this.messageService.messages.length > 0)
    {
      this.messageService.clear();
      console.log("if");
    }
    else
    {
      this.messageService.add('Wyszukane samochody:');
      console.log("else");
    }*/
    return of(this.cars);
  }

  getCarById(id: number): Car
  {
    return this.cars.find(car => car.id === id);
  }

  addCar(car: Car): void
  {
    this.cars.push(car);
  }

}
