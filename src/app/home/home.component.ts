import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Angular 2 with p5 js.';
  constructor() {
    console.log('home-constructed');
  }

  ngOnInit() {
    console.log('home-init');
  }

}
