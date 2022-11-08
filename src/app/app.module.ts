import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastItemComponent,
    ForecastListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
