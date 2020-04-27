import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalPesertaComponent } from './jadwal-peserta.component';

describe('JadwalPesertaComponent', () => {
  let component: JadwalPesertaComponent;
  let fixture: ComponentFixture<JadwalPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwalPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
