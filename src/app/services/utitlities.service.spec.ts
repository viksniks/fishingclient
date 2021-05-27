import { TestBed } from '@angular/core/testing';

import { UtitlitiesService } from './utitlities.service';

describe('UtitlitiesService', () => {
  let service: UtitlitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtitlitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
