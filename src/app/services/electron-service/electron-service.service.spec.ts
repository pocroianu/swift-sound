import { TestBed } from '@angular/core/testing';

import { ElectronService } from './electron-service.service';

describe('ElectronServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectronService = TestBed.get(ElectronService);
    expect(service).toBeTruthy();
  });
});
