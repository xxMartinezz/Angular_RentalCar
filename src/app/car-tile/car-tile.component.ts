import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-tile',
  templateUrl: './car-tile.component.html',
  styleUrls: ['./car-tile.component.css']
})
export class CarTileComponent implements OnInit {

  @Input() carName;
  @Input() numberOfSeats;
  @Input() limit;
  @Input() deposit;
  @Input() carPrice;
  @Input() image;
  @Input() available;

  onRentCar(): void
  {
    if(this.available === true) this.available = false
    else this.available = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
