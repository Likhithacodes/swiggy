import { TestBed } from '@angular/core/testing';

import { TopresaurantsserviceService } from './topresaurantsservice.service';

describe('TopresaurantsserviceService', () => {
  let service: TopresaurantsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopresaurantsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
