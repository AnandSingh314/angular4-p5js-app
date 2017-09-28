import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { P5ClockComponent } from './p5-clock/p5-clock.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  , {
    path: 'analog',
    component: P5ClockComponent
  },
  {
    path: 'digital',
    component: DigitalClockComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    P5ClockComponent,
    PathNotFoundComponent,
    DigitalClockComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
