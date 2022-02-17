import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutantCreateComponent } from './pollutant-create.component';

describe('PollutantCreateComponent', () => {
  let component: PollutantCreateComponent;
  let fixture: ComponentFixture<PollutantCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollutantCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
