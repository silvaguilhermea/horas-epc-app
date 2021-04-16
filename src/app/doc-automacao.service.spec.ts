import { TestBed } from '@angular/core/testing';

import { DocAutomacaoService } from './doc-automacao.service';

describe('DocAutomacaoService', () => {
  let service: DocAutomacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocAutomacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
