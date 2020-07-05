import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoCriarComponent } from './movimentacao-criar.component';

describe('MovimentacaoCriarComponent', () => {
  let component: MovimentacaoCriarComponent;
  let fixture: ComponentFixture<MovimentacaoCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
