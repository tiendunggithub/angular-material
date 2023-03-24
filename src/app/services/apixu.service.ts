import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  
  constructor(private http: HttpClient) {}

  getWeather(location: any){
      return this.http.get(
          // 'http://api.weatherstack.com/current?access_key=2328f6977c43172669ce72e2a37d49e4&query=' + location
          'http://api.weatherapi.com/v1/current.json?key=25496ccd0f334302b9b92747232203&q=' + location
      );
  }

  getWeatherMultiDay(location: any){
    return this.http.get(
        // 'http://api.weatherstack.com/current?access_key=2328f6977c43172669ce72e2a37d49e4&query=' + location
        'http://api.weatherapi.com/v1/forecast.json?key=25496ccd0f334302b9b92747232203&q='+ location +'&days=7'
        // 'http://api.weatherapi.com/v1/current.json?key=25496ccd0f334302b9b92747232203&q=' + location +'&days=7'
    );
  }
}
