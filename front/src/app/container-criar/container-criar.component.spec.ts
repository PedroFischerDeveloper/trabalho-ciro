import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCriarComponent } from './container-criar.component';

describe('ContainerCriarComponent', () => {
  let component: ContainerCriarComponent;
  let fixture: ComponentFixture<ContainerCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
