import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherWidgetModule } from './feature/widget/weather-widget.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WeatherWidgetModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
