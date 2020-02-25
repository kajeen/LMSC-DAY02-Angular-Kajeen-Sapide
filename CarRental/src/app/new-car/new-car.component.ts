import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  
  car = [
	  {	    img:"",
			model: "",
			price: "",
			color: "",
			type:"",
			passenger:""
	   },{	    img:"",
			model: "",
			price: "",
			color: "",
			type:"",
			passenger:""
	   }]

  ngOnInit(): void {
  }


  submit()
  {
	console.table(this.car);
	  
   }

constructor() { }
}
