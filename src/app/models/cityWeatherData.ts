class MainWeatherInfo {
  feels_like: number = 0;
  temp: number = 0;
  humidity: number = 0;
  temp_max: number = 0;
  temp_min: number = 0;
}

class WeatherConditionsInfo {
  description: string = '';
  main: string = '';
  icon: string = '';
}

class WindInfo {
  speed: number = 0;
}

export class CityWeatherData {
  name: string = '';
  main: MainWeatherInfo = new MainWeatherInfo();
  weather: WeatherConditionsInfo[] = [];
  wind: WindInfo = new WindInfo();
}
