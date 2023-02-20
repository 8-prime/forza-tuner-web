import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { TuningDataTransmission } from '../tuning-data-transmission';
import { TuningValues } from '../tuning-values';

@Component({
  selector: 'app-tuning-inputs',
  templateUrl: './tuning-inputs.component.html',
  styleUrls: ['./tuning-inputs.component.css']
})
export class TuningInputsComponent implements OnInit {


  @Input() tuningValues: TuningValues = new TuningValues(0,0,0,0,0,0,0);

  constructor(public info: TuningDataTransmission) { }

  ngOnInit(): void {
  }

  setDefaultValues(){
    if (this.tuningValues != null){
      this.tuningValues.rollBarmin = 1;
      this.tuningValues.rollBarmax = 65;
      this.tuningValues.springsmin = 50;
      this.tuningValues.springsmax = 230;
      this.tuningValues.shocksmin = 1;
      this.tuningValues.shocksmax = 65;
      this.tuningValues.weightDistribution = 50;
    }
  }

  generateTune(){
    this.info.setTuningValues(this.tuningValues);
    document.getElementById("tune")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }

}
