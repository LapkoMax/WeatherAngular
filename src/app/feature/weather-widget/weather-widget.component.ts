import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CityLocation } from 'src/app/models/cityLocation';
import { CityWeatherData } from 'src/app/models/cityWeatherData';
import { WeatherService } from 'src/app/services/weather-service/weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  cityName: string = '';
  currentCity: CityLocation = new CityLocation();
  currentCityWeather: CityWeatherData = new CityWeatherData();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.cityName = '';
    this.currentCity =
      (JSON.parse(
        localStorage.getItem('currentCity') ?? '{}'
      ) as CityLocation) ?? new CityLocation();
    if (this.currentCity.name !== '') {
      this.weatherService
        .getCityWeatherDataByCityLocation(this.currentCity)
        .subscribe(
          (cityWeatherData: CityWeatherData) =>
            (this.currentCityWeather = cityWeatherData)
        );
    }
  }

  getWeather(newCityName: string): void {
    this.weatherService
      .getCoordinatesByCityName(newCityName)
      .pipe(
        mergeMap((cityLocations: CityLocation[]) => {
          if (cityLocations.length > 0) {
            this.currentCity = cityLocations[0];
            localStorage.setItem(
              'currentCity',
              JSON.stringify(cityLocations[0])
            );
            return this.weatherService.getCityWeatherDataByCityLocation(
              this.currentCity
            );
          }
          return of(new CityWeatherData());
        })
      )
      .subscribe((cityWeatherData: CityWeatherData) => {
        console.log(cityWeatherData);
        this.currentCityWeather = cityWeatherData;
      });
  }
}
