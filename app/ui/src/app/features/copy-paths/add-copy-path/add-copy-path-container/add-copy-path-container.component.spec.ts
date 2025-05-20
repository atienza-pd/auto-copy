import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCopyPathContainerComponent } from './add-copy-path-container.component';
import { AddCopyPathDataService } from '../../services/add-copy-path-data/add-copy-path-data.service';

describe('AddCopyPathContainerComponent', () => {
  let component: AddCopyPathContainerComponent;
  let fixture: ComponentFixture<AddCopyPathContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCopyPathContainerComponent],
      providers: [{ provide: AddCopyPathDataService, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCopyPathContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
