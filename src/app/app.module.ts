import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather-service/weather.service';
import { WeatherWidgetComponent } from './feature/weather-widget/weather-widget.component';

@NgModule({
  declarations: [AppComponent, WeatherWidgetComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
