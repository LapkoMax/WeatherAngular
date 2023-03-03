import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss'],
})
export class CityFormComponent {
  @Input() errorMessage: string = '';

  @Output() nameSubmited = new EventEmitter<string>();

  cityName: string = '';

  constructor() {}

  onSubmit(): void {
    this.nameSubmited.emit(this.cityName);
  }
}
