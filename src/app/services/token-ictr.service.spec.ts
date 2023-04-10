import { TestBed } from '@angular/core/testing';

import { TokenIctrService } from './token-ictr.service';

describe('TokenIctrService', () => {
  let service: TokenIctrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIctrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
