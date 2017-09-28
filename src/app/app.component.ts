import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
declare var p5: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private navLinks: any[];

  constructor() {
    this.navLinks = [
      {link: '', label: 'Home'},
      {link: 'analog', label: 'Analog'},
      {link: 'digital', label: 'Digital'},
    ];
  }

  ngOnInit(): void {
    // const s = ;

    // const player = new p5((p) => {
    //   p.setup = () => {
    //     p.createCanvas(p.windowWidth, p.windowHeight);
    //     p.background(0);
    //   };
    //   p.angle = 0;
    //   p.draw = () => {
    //     p.background(0);
    //     p.push();
    //     p.translate(300, 300);
    //     p.rotate(p.angle);
    //     p.fill(0, 255, 0);
    //     p.rect(0, 0, 200, 100);
    //     p.pop();
    //     p.translate(900, 300);
    //     p.rotate(p.angle);
    //     p.fill(0, 100, 255);
    //     p.rect(0, 0, 200, 100);
    //     p.angle += 1;
    //   };
    //   p.windowResized = () => {
    //     p.resizeCanvas(p.windowWidth, p.windowHeight);
    //   };
    // });

  }


}
