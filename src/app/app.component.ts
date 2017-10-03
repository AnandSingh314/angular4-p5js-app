import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private navLinks: any[];

  constructor() {
    console.log('app-constructed');
    this.navLinks = [
      { link: '', label: 'Home' },
      { link: 'analog', label: 'Analog' },
      { link: 'digital', label: 'Digital' },
      {link: 'gear-dial', label: 'Gear'},
      //{link: 'mic-dial', label: 'reactive-dial'}
    ];
  }

  ngOnInit(): void {
    console.log('app-init');
  }


}
