import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgerPlannerComponent } from './budger-planner.component';

describe('BudgerPlannerComponent', () => {
  let component: BudgerPlannerComponent;
  let fixture: ComponentFixture<BudgerPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgerPlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgerPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
