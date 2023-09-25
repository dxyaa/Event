import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';



@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    CountdownTimerComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
