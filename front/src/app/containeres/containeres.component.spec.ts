import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaineresComponent } from './containeres.component';

describe('ContaineresComponent', () => {
  let component: ContaineresComponent;
  let fixture: ComponentFixture<ContaineresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaineresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaineresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
