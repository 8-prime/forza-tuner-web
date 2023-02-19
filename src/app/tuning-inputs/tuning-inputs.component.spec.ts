import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuningInputsComponent } from './tuning-inputs.component';

describe('TuningInputsComponent', () => {
  let component: TuningInputsComponent;
  let fixture: ComponentFixture<TuningInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuningInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuningInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
