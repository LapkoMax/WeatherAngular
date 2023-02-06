import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget-component/weather-widget.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from 'src/app/core/services/weather-service/weather.service';
import { CityFormComponent } from './city-form/city-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CityNamePipe } from './city-name/city-name.pipe';

@NgModule({
  declarations: [WeatherWidgetComponent, CityFormComponent, CityNamePipe],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  exports: [WeatherWidgetComponent],
})
export class WeatherWidgetModule {}
