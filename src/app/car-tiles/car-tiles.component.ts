import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Car } from '../car';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-car-tiles',
  templateUrl: './car-tiles.component.html',
  styleUrls: ['./car-tiles.component.css']
})
export class CarTilesComponent implements OnInit {

  private cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit() 
  {
    this.carsService.getCarList().subscribe (cars => {
      this.cars = cars;
      });
  }

}
