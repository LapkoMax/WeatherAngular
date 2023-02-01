class CityLocalNames {
  en: string = '';
}

export class CityLocation {
  name: string = '';
  local_names: CityLocalNames = new CityLocalNames();
  lat: string = '';
  lon: string = '';
}
