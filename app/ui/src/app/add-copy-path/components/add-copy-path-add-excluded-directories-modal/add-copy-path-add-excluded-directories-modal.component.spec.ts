import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCopyPathAddExcludedDirectoriesModalComponent } from './add-copy-path-add-excluded-directories-modal.component';

describe('AddCopyPathAddExcludedDirectoriesModalComponent', () => {
  let component: AddCopyPathAddExcludedDirectoriesModalComponent;
  let fixture: ComponentFixture<AddCopyPathAddExcludedDirectoriesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCopyPathAddExcludedDirectoriesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCopyPathAddExcludedDirectoriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
