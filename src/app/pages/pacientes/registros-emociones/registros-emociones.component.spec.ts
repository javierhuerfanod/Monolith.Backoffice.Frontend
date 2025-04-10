import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosEmocionesComponent } from './registros-emociones.component';

describe('RegistrosEmocionesComponent', () => {
  let component: RegistrosEmocionesComponent;
  let fixture: ComponentFixture<RegistrosEmocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosEmocionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosEmocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
