import { TestBed } from '@angular/core/testing';

import { MusicCollectionDataService } from './music-collection-data.service';

describe('MusicCollectionDataService', () => {
  let service: MusicCollectionDataService; // Declare the service as an instance

  beforeEach(() => {
    TestBed.configureTestingModule({
    

    });
    service = TestBed.inject(MusicCollectionDataService); // Inject the service instance
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
