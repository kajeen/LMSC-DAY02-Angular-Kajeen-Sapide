import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   cars = [
{	img:"img/car1.jpg",
	model: "Volkswagen",
	price: "4000",
	color: "red",
	type:"normal",
	passenger:"5"
},{
	img:"img/car2",
	model: "Audi.",
	price: "6000",
	color: "white",
	type:"automatic",
	passenger:"5"

}
];

}
