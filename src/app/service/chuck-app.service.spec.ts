import { TestBed } from '@angular/core/testing';

import { ChuckAppService } from './chuck-app.service';

describe('ChuckAppService', () => {
  let service: ChuckAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
