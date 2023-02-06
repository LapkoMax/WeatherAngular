import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CityLocation } from 'src/app/core/models/city-location.model';
import { CityWeatherData } from 'src/app/core/models/city-weather-data.model';
import { WeatherService } from 'src/app/core/services/weather-service/weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  cityName: string = '';
  currentCity?: CityLocation;
  currentCityWeather?: CityWeatherData;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.currentCity =
      (JSON.parse(
        localStorage.getItem('currentCity') ?? '{}'
      ) as CityLocation) ?? {};

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
        switchMap((cityLocations: CityLocation[]) => {
          this.errorMessage = '';
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
          this.errorMessage = 'Can not find your city, please, try again!';
          this.cityName = '';
          return of(this.currentCityWeather);
        })
      )
      .subscribe((cityWeatherData?: CityWeatherData) => {
        this.currentCityWeather = cityWeatherData;
      });
  }
}
