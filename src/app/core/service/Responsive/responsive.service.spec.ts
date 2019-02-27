import { TestBed } from '@angular/core/testing';

import { ResponsiveService } from './responsive.service';

describe('ResponsiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsiveService = TestBed.get(ResponsiveService);
    expect(service).toBeTruthy();
  });
});
