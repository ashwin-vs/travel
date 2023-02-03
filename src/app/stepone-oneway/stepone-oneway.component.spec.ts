import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteponeOnewayComponent } from './stepone-oneway.component';

describe('SteponeOnewayComponent', () => {
  let component: SteponeOnewayComponent;
  let fixture: ComponentFixture<SteponeOnewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteponeOnewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteponeOnewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
