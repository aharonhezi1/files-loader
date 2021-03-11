import { TestBed } from '@angular/core/testing';

import { FileStreamApiService } from './file-stream-api.service';

describe('FileStreamApiService', () => {
  let service: FileStreamApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileStreamApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
