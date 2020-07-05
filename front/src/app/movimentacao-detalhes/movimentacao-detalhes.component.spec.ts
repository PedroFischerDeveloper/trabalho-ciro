import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoDetalhesComponent } from './movimentacao-detalhes.component';

describe('MovimentacaoDetalhesComponent', () => {
  let component: MovimentacaoDetalhesComponent;
  let fixture: ComponentFixture<MovimentacaoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
