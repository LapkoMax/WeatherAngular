import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget-component/weather-widget.component';
import { FormsModule } from '@angular/forms';
// TODO: в angular.json файле создай себе алиас для @core, @weather и импортируй по алиасам
// пометка: если ты находишься в модуле в котором импортируешь что то из этого же модуля - не нужно юзать алиас
// просто импорть используя относительный путь
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
