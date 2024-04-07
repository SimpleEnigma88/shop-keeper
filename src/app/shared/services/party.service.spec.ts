import { TestBed } from '@angular/core/testing';
import { PartyService } from './party.service'; // Import the PartyService class from the correct file

describe('PartyService', () => {
  let service: PartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
