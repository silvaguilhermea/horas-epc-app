import { TestBed } from '@angular/core/testing';

import { DocEngenhariaService } from './doc-engenharia.service';

describe('DocEngenhariaService', () => {
  let service: DocEngenhariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocEngenhariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
