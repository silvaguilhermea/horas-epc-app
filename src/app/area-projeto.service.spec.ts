import { TestBed } from '@angular/core/testing';

import { AreaProjetoService } from './area-projeto.service';

describe('AreaProjetoService', () => {
  let service: AreaProjetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaProjetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
