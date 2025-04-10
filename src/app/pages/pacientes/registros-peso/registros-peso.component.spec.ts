import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosPesoComponent } from './registros-peso.component';

describe('RegistrosPesoComponent', () => {
  let component: RegistrosPesoComponent;
  let fixture: ComponentFixture<RegistrosPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosPesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
