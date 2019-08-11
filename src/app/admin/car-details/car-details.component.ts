import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/cars.service';
import { Car } from 'src/app/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  private car: Car;
  
  constructor(private router: Router, private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit () 
  {
    this.route.params.subscribe (parameters => {
      console.log(parameters);
      this.car = this.carsService.getCarById(+parameters['id']);
  })
  }

  goBackToCars() {
    this.router.navigate(['admin', 'cars']);
  }
}
