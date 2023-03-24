import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  
  constructor(private http: HttpClient) {}

  //Realtime API
  getWeather(location: any){
      return this.http.get(
          'http://api.weatherapi.com/v1/current.json?key=25496ccd0f334302b9b92747232203&q=' + location +'&lang=vi'
      );
  }

  //Forecast API
  getWeatherMultiDay(location: any){
    return this.http.get(
        'http://api.weatherapi.com/v1/forecast.json?key=25496ccd0f334302b9b92747232203&q='+ location +'&days=7&lang=vi'
    );
  }

  //History API
  getWeatherHistory(location: any){
    return this.http.get(
      'http://api.weatherapi.com/v1/history.json?key=25496ccd0f334302b9b92747232203&q='+ location +'&days=7&lang=vi'
    );
  }
}
