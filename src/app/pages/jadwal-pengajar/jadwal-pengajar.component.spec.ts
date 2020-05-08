import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JadwalPengajarComponent } from './jadwal-pengajar.component';

describe('JadwalPengajarComponent', () => {
  let component: JadwalPengajarComponent;
  let fixture: ComponentFixture<JadwalPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JadwalPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JadwalPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
