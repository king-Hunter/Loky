import { TestBed } from '@angular/core/testing';

import { JsonplaceholderServiceService } from './jsonplaceholder-service.service';

describe('JsonplaceholderServiceService', () => {
  let service: JsonplaceholderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceholderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
