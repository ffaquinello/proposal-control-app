import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRespomsavelComponent } from './cadastrar-respomsavel.component';

describe('CadastrarRespomsavelComponent', () => {
  let component: CadastrarRespomsavelComponent;
  let fixture: ComponentFixture<CadastrarRespomsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarRespomsavelComponent]
    });
    fixture = TestBed.createComponent(CadastrarRespomsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
