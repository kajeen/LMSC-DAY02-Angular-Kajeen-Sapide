import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	DonateCounter :number = 0;

  constructor() { }


  ngOnInit(): void {
  }
   donateClick(){

         this.DonateCounter += 10;

 }

}
