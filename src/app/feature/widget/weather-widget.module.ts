import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '@core/services/weather-service/weather.service';
import { CityFormComponent } from './city-form/city-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CityNamePipe } from './pipes/city-name.pipe';
import { SpecialImageComponent } from './special-image/special-image.component';

@NgModule({
  declarations: [
    WeatherWidgetComponent,
    CityFormComponent,
    CityNamePipe,
    SpecialImageComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  exports: [WeatherWidgetComponent],
})
export class WeatherWidgetModule {}
