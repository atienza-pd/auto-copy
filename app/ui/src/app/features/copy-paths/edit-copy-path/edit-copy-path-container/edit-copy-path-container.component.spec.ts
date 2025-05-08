import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCopyPathContainerComponent } from './edit-copy-path-container.component';
import { GetOneCopyPathDataService } from '../../services/get-one-copy-path-data/get-one-copy-path-data.service';
import { EditCopyPathDataService } from '../../services/edit-copy-path-data/edit-copy-path-data.service';
import { ActivatedRoute } from '@angular/router';

const fakeActivatedRoute = {
  snapshot: {
    paramMap: {
      get: jasmine.createSpy().and.returnValue('1'),
    },
  },
};
describe('EditCopyPathContainerComponent', () => {
  let component: EditCopyPathContainerComponent;
  let fixture: ComponentFixture<EditCopyPathContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCopyPathContainerComponent],
      providers: [
        { provide: GetOneCopyPathDataService, useValue: {} },
        { provide: EditCopyPathDataService, useValue: {} },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCopyPathContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
