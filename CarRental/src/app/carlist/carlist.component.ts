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
   car = [
{	img:"",
	model: "",
	price: "",
	color: "",
	type:"",
	passenger:""
},{
	img:"",
	model: "",
	price: "",
	color: "",
	type:"",
	passenger:""

}
];

}
