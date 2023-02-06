interface CityLocalNames {
  en?: string;
}

export interface CityLocation {
  name: string;
  local_names: CityLocalNames;
  lat: string;
  lon: string;
}
