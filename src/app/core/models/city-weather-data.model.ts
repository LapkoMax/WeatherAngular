interface MainWeatherInfo {
  feels_like: number;
  temp: number;
  humidity: number;
  temp_max: number;
  temp_min: number;
}

interface WeatherConditionsInfo {
  description: string;
  main: string;
  icon: string;
}

interface WindInfo {
  speed: number;
}

export interface CityWeatherData {
  name: string;
  main: MainWeatherInfo;
  weather: WeatherConditionsInfo[];
  wind: WindInfo;
}
