import { Component } from '@angular/core';
import { TuningValues } from './tuning-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tuningValue: TuningValues = new TuningValues(0,0,0,0,0,0,0);
}
