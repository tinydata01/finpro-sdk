import { TestBed } from '@angular/core/testing';

import { OnemoneywebSdkService } from './onemoneyweb-sdk.service';

describe('OnemoneywebSdkService', () => {
  let service: OnemoneywebSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnemoneywebSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
