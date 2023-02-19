import { Component, OnInit, Input } from '@angular/core';
import { TuningDataTransmission } from '../tuning-data-transmission';
import { TuningValues } from '../tuning-values';

@Component({
  selector: 'app-tuning-results',
  templateUrl: './tuning-results.component.html',
  styleUrls: ['./tuning-results.component.css']
})
export class TuningResultsComponent {


  rollFront: number = 0;
  rollBack: number = 0;
  springsFront: number = 0;
  springsBack: number = 0;
  shocksReboundFront: number = 0;
  shocksReboundBack: number = 0;
  shocksDampFront: number = 0;
  shocksDampBack: number = 0;

  constructor(public info: TuningDataTransmission) {
    info.currentTuningValues.subscribe( tv => this.calculateTune(tv));
  }


  calculateTune(tuning: TuningValues){
    this.rollFront = (tuning.rollBarmax - tuning.rollBarmin) * (tuning.weightDistribution / 100) + tuning.rollBarmin
    this.rollBack = (tuning.rollBarmax - tuning.rollBarmin) * ((100 - tuning.weightDistribution) / 100) + tuning.rollBarmin

    this.springsFront = (tuning.springsmax - tuning.springsmin) * (tuning.weightDistribution / 100) + tuning.springsmin
    this.springsBack = (tuning.springsmax - tuning.springsmin) * ((100 - tuning.weightDistribution) / 100) + tuning.springsmin

    this.shocksReboundFront = (tuning.shocksmax - tuning.shocksmin) * (tuning.weightDistribution / 100) + tuning.shocksmin
    this.shocksReboundBack = (tuning.shocksmax - tuning.shocksmin) * ((100 - tuning.weightDistribution) / 100) + tuning.shocksmin

    this.shocksDampFront = this.shocksReboundFront * 0.7
    this.shocksDampBack = this.shocksReboundBack * 0.7

  }

}
