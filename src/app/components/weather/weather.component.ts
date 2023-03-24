import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../../services/apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  
  weatherSearchForm: FormGroup;
  weatherData: any;
  weatherDataMultiDay: any;
  location: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.sendToAPIXU('Thua Thien Hue');
    this.getLocation();
  }

  lstTime: any[] = [];
  status:any;
  sendToAPIXU(location: any) {
    this.apixuService.getWeather(location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
    this.apixuService.getWeatherMultiDay(location).subscribe(data=>{
      // this.weatherDataMultiDay.push(data);
      this.weatherDataMultiDay = data;
      this.weatherDataMultiDay = this.weatherDataMultiDay.forecast.forecastday;
      console.log('test: ', this.weatherDataMultiDay);
      console.log('7 day: ', data);
    })
  }

  lat: any;
  lng: any;
  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        if (data) {
          console.log("Latitude: " + data.coords.latitude +
            "Longitude: " + data.coords.longitude);
          this.lat = data.coords.latitude;
          this.lng = data.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
          this.getFirst(this.lat, this.lng);
        }
      },
        error => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getFirst(lat:any, lon: any){
    this.apixuService.getWeatherSearch(lat, lon).subscribe(data=>{
      console.log('weather first: ', data);
    })
  }
}
