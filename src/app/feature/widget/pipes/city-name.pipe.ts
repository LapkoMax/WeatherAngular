import { Pipe, PipeTransform } from '@angular/core';
import { CityLocation } from '@core/models/city-location.model';

@Pipe({ name: 'cityName' })
export class CityNamePipe implements PipeTransform {
  transform(value: CityLocation): string {
    return value.local_names.en ?? value.name ?? '<No name>';
  }
}
