import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPropostaComponent } from './alterar-proposta.component';

describe('AlterarPropostaComponent', () => {
  let component: AlterarPropostaComponent;
  let fixture: ComponentFixture<AlterarPropostaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarPropostaComponent]
    });
    fixture = TestBed.createComponent(AlterarPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
