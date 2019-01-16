import { TestBed } from '@angular/core/testing';

import { CommonFnService } from './common-fn.service';

describe('CommonFnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonFnService = TestBed.get(CommonFnService);
    expect(service).toBeTruthy();
  });
});
