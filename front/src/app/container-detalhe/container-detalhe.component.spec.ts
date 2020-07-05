import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDetalheComponent } from './container-detalhe.component';

describe('ContainerDetalheComponent', () => {
  let component: ContainerDetalheComponent;
  let fixture: ComponentFixture<ContainerDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
