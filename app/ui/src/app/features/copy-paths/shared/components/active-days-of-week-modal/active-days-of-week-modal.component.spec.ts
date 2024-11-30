import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveDaysOfWeekModalComponent } from './active-days-of-week-modal.component';

describe('ActiveDaysOfWeekModalComponent', () => {
  let component: ActiveDaysOfWeekModalComponent;
  let fixture: ComponentFixture<ActiveDaysOfWeekModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveDaysOfWeekModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveDaysOfWeekModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
