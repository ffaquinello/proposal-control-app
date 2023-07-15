import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPropostaComponent } from './cadastrar-proposta.component';

describe('CadastrarPropostaComponent', () => {
  let component: CadastrarPropostaComponent;
  let fixture: ComponentFixture<CadastrarPropostaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPropostaComponent]
    });
    fixture = TestBed.createComponent(CadastrarPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
