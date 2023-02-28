import { TestBed } from '@angular/core/testing';

import { BuildCopyPathJsonHttpService } from './build-copy-path-json-http.service';

describe('BuildCopyPathJsonHttpService', () => {
  let service: BuildCopyPathJsonHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildCopyPathJsonHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
