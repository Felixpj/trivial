import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPreguntaComponent } from './tarjeta-pregunta.component';

describe('TarjetaPreguntaComponent', () => {
  let component: TarjetaPreguntaComponent;
  let fixture: ComponentFixture<TarjetaPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
