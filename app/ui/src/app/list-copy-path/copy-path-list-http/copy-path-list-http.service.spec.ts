import { TestBed } from '@angular/core/testing';

import { CopyPathListHttpService } from './copy-path-list-http.service';

describe('CopyPathListHttpService', () => {
  let service: CopyPathListHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyPathListHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
