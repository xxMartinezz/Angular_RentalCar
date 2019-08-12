import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarsService } from 'src/app/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/car';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-car-details-edit',
  templateUrl: './car-details-edit.component.html',
  styleUrls: ['./car-details-edit.component.css']
})
export class CarDetailsEditComponent implements OnInit {

  @ViewChild("form") form: NgForm;
  private car: Car = new Car();
  //private cars: Car[];

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.car = this.carsService.getCarById(+parameters['id']);
    })
  }

  onSubmit()
  {
    console.log(this.car);
    console.log(this.form.value);
    console.log(this.form.valid);
    console.log(this.form.dirty);
    console.log(this.form.touched);
    let car: Car = new Car(this.form.value.id, this.form.value.name, this.form.value.price, this.form.value.available);
    this.carsService.addCar(car);
    //console.log('on submit', this.car);
  }

}
