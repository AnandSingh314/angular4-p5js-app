import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { HomeComponent } from './home/home.component';
import { AudioDialsComponent } from './audio-dials/audio-dials.component';
import { GearDialComponent } from './gear-dial/gear-dial.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  , {
    path: 'analog',
    component: AnalogClockComponent
  },
  {
    path: 'digital',
    component: DigitalClockComponent
  },
  {
    path: 'mic-dial',
    component: AudioDialsComponent
  },
  {
    path: 'gear-dial',
    component: GearDialComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    PathNotFoundComponent,
    DigitalClockComponent,
    HomeComponent,
    AudioDialsComponent,
    GearDialComponent
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
