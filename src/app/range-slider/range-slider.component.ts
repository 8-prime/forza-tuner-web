import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent{

  @Input() currentValue : number = 20;
  @Input() label: string = '';
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Output() currentValueChange = new EventEmitter<number>();

  selectedValueChanged(){
    this.currentValueChange.emit(this.currentValue);
  }


  dec(){
    this.currentValue--;
    this.selectedValueChanged();
  }

  inc(){
    this.currentValue++;
    this.selectedValueChanged();
  }
}
