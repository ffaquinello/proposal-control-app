import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResponsavelComponent } from './select-responsavel.component';

describe('SelectResponsavelComponent', () => {
  let component: SelectResponsavelComponent;
  let fixture: ComponentFixture<SelectResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectResponsavelComponent]
    });
    fixture = TestBed.createComponent(SelectResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
