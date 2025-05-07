import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryFormModalComponent } from './directory-form-modal.component';

describe('DirectoryFormModalComponent', () => {
  let component: DirectoryFormModalComponent;
  let fixture: ComponentFixture<DirectoryFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
