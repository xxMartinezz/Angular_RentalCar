import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';
import { CarsService } from 'src/app/cars.service';
import { MessageService } from 'src/app/message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  private cars: Car[];

  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.carsService.getCarList().subscribe (cars => {
      this.cars = cars;
      });
  }

  goToCarDetailsEdit()
  {
    this.router.navigate(['/admin/cars/new']);
  }
}
