import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosComidasComponent } from './registros-comidas.component';

describe('RegistrosComidasComponent', () => {
  let component: RegistrosComidasComponent;
  let fixture: ComponentFixture<RegistrosComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosComidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
