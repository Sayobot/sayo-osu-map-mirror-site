import { TestBed } from '@angular/core/testing';

import { UpdatedLogService } from './updated-log.service';

describe('UpdatedLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatedLogService = TestBed.get(UpdatedLogService);
    expect(service).toBeTruthy();
  });
});
