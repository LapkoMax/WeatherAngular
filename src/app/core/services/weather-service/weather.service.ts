import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityLocation } from '@core/models/city-location.model';
import { CityWeatherData } from '@core/models/city-weather-data.model';

const APIKey = 'b1f81cbdc552ee9c9d86fcabf9b48999';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCoordinatesByCityName(cityName: string): Observable<CityLocation[]> {
    return this.http.get<CityLocation[]>(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKey}`
    );
  }

  getCityWeatherDataByCityLocation(
    cityLocation: CityLocation
  ): Observable<CityWeatherData> {
    return this.http.get<CityWeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation.lat}&lon=${cityLocation.lon}&units=metric&appid=${APIKey}`
    );
  }
}
