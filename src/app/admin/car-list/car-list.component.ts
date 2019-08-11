import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';
import { CarsService } from 'src/app/cars.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit() 
  {
    this.carsService.getCarList().subscribe (cars => {
      this.cars = cars;
      });
  }

}
