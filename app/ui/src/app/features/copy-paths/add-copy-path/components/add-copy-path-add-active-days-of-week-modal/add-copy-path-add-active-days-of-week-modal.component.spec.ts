import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCopyPathAddActiveDaysOfWeekModalComponent } from './add-copy-path-add-active-days-of-week-modal.component';

describe('AddCopyPathAddActiveDaysOfWeekModalComponent', () => {
  let component: AddCopyPathAddActiveDaysOfWeekModalComponent;
  let fixture: ComponentFixture<AddCopyPathAddActiveDaysOfWeekModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCopyPathAddActiveDaysOfWeekModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCopyPathAddActiveDaysOfWeekModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
