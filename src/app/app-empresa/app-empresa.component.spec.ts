import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmpresaComponent } from './app-empresa.component';

describe('AppEmpresaComponent', () => {
  let component: AppEmpresaComponent;
  let fixture: ComponentFixture<AppEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
