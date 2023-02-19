import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TuningInputsComponent } from './tuning-inputs/tuning-inputs.component';
import { TuningResultsComponent } from './tuning-results/tuning-results.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { FormsModule } from '@angular/forms';
import { TuningDataTransmission } from './tuning-data-transmission';

@NgModule({
  declarations: [
    AppComponent,
    TuningInputsComponent,
    TuningResultsComponent,
    RangeSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TuningDataTransmission
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
