import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCopyPathContainerComponent } from './list-copy-path-container.component';

describe('ListCopyPathContainerComponent', () => {
  let component: ListCopyPathContainerComponent;
  let fixture: ComponentFixture<ListCopyPathContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCopyPathContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCopyPathContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
