import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TuningValues } from "./tuning-values";

@Injectable()
export class TuningDataTransmission {

    private tuningValues: BehaviorSubject<TuningValues> = new BehaviorSubject( new TuningValues(0,0,0,0,0,0,0));


    currentTuningValues = this.tuningValues.asObservable();

    setTuningValues(tuningVals: TuningValues){
        this.tuningValues.next(tuningVals);
    }
}
