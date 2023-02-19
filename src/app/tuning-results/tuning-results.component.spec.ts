import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuningResultsComponent } from './tuning-results.component';

describe('TuningResultsComponent', () => {
  let component: TuningResultsComponent;
  let fixture: ComponentFixture<TuningResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuningResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuningResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
