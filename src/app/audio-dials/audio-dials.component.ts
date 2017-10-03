import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import * as p5dom from 'p5/lib/addons/p5.dom';
import * as p5sound from 'p5/lib/addons/p5.sound';

declare var p5sound: any;

@Component({
  selector: 'app-audio-dials',
  templateUrl: './audio-dials.component.html',
  styleUrls: ['./audio-dials.component.css']
})
export class AudioDialsComponent implements OnInit, OnDestroy {


  private p5;
  //private p5sound;
  private origin = { x: 0, y: 0 };
  private toggle = true;

  constructor() {
    console.log('audio-constructed');
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
    console.log('audio-init');
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.createCanvas();
    console.log('audio-destroy');
  }

  private onWindowResize = (e) => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  }

  private createCanvas = () => {
    console.log('creating canvas');
    if (this.toggle) {
      this.p5 = new p5(this.drawing);
      this.toggle = !this.toggle;
    } else {
      this.p5.noCanvas();
      this.toggle = !this.toggle;
    }
  }

  private drawing = function (p: any) {
    let mic;
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent('audio-dial-canvas');
      p.angleMode(p.DEGREES);
      p.rectMode(p.CENTER);
      p.background(0);
      // mic = new p5sound.AudioIn();
      // mic.start();
      // console.info('p5sound: ', this.);
      // console.info('mic: ', mic);
    };

    p.draw = () => {
      const time = {
        hr: p.hour(),
        mn: p.minute(),
        sc: p.second(),
        ms: p.millis()
      };
      const center = {
        x: p.width / 2,
        y: p.height / 2
      };

      p.background(0);


      let clock = time.hr + ':' + time.mn + ':' + time.sc;
      p.fill(255);
      p.noStroke();
      p.textSize(50);
      p.text(clock, center.x, center.y);
    };
  };

}
