import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  EditFirstBuildJsonLocationHttpService,
  GetFirstBuildJsonLocationHttpService,
  ListCopyPathContainerComponent,
} from './list-copy-path-container.component';
import { CopyPathListHttpService } from '../copy-path-list-http/copy-path-list-http.service';
import { DeleteCopyPathHttpService } from '../delete-copy-path-http/delete-copy-path-http.service';

describe('ListCopyPathContainerComponent', () => {
  let component: ListCopyPathContainerComponent;
  let fixture: ComponentFixture<ListCopyPathContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCopyPathContainerComponent],
      providers: [
        { provide: CopyPathListHttpService, useValue: {} },
        { provide: DeleteCopyPathHttpService, useValue: {} },
        { provide: GetFirstBuildJsonLocationHttpService, useValue: {} },
        { provide: EditFirstBuildJsonLocationHttpService, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCopyPathContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
