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
  }

  lstTime: any[] = [];
  status:any;
  sendToAPIXU(location: any) {
    this.apixuService.getWeather(location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      switch (this.weatherData?.current.condition.text){
        case 'Sunny':
          this.status = 'Nhiều nắng';
          break;
        case 'Partly cloudy':
          this.status = 'Mây mù';
          break;
        case 'Mist':
          this.status = 'Sương mù';
          break;
        case 'Clear':
          this.status = 'Sương mù';
          break;
        default:
          this.status = '';
          break;
      }
    });
    this.apixuService.getWeatherMultiDay(location).subscribe(data=>{
      // this.weatherDataMultiDay.push(data);
      this.weatherDataMultiDay = data;
      this.weatherDataMultiDay = this.weatherDataMultiDay.forecast.forecastday;
      console.log('test: ', this.weatherDataMultiDay);
      console.log('7 day: ', data);
    })
  }
}
