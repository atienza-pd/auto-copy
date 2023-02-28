import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCopyPathModalComponent } from './delete-copy-path-modal.component';

describe('DeleteCopyPathModalComponent', () => {
  let component: DeleteCopyPathModalComponent;
  let fixture: ComponentFixture<DeleteCopyPathModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCopyPathModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCopyPathModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
