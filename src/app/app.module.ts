import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

//components
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';

//services
import { ApixuService } from "./services/apixu.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
